// pages/api/pie-chart.ts
import type { NextApiRequest, NextApiResponse } from 'next';

import ProductTransaction from '@/models/ProductTransaction';
import dbConnect from '@/utils/dbConnect';



const monthMap: { [key: string]: number } = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    const { month } = req.body;
    const monthNumber = monthMap[month.toLowerCase()] || 1;

    if(req.method === 'POST'){

      if (!monthNumber) {
        return res.status(400).json({ message: "Invalid month provided" });
      }
      const data = await ProductTransaction.aggregate([
        {
          $match: {
            $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] }
          }
        },
        {
          $group: {
            _id: '$category',
            count: { $sum: 1 }
          }
        },
        {
          $project: {
            category: '$_id',
            count: 1,
            _id: 0
          }
        },
        {
          $group: {
            _id: null,
            totalCount: { $sum: "$count" },
            categories: { $push: { category: "$category", count: "$count" } }
          }
        }
      ]);

      if (data.length === 0) {
        return res.status(404).json({ message: "No data found for the specified month" });
      } 
      res.status(200).json(data[0]?.categories);   
    }else{
      res.status(500).json({ message: 'Method not Allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pie chart data', error });
  }
}
