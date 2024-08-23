import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import ProductTransaction from '@/models/ProductTransaction';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (req.method === 'POST') {
      const { search, page = 1, perPage = 10 } = req.body;

      const query: any = {};

      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } }, // case-insensitive search in title
          { description: { $regex: search, $options: 'i' } }, // case-insensitive search in description
          { price: { $eq: search } }, // exact match for price
        ];
      }

      const transactions = await ProductTransaction.find(query)
        .skip((page - 1) * perPage)
        .limit(perPage);

      const totalTransactions = await ProductTransaction.countDocuments(query);

      res.status(200).json({
        transactions,
        totalPages: Math.ceil(totalTransactions ),
        currentPage: page,
      });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}
