// pages/api/bar-chart.ts
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



const priceRanges = [
  { range: '0-100', min: 0, max: 100 },
  { range: '101-200', min: 101, max: 200 },
  { range: '201-300', min: 201, max: 300 },
  { range: '301-400', min: 301, max: 400 },
  { range: '401-500', min: 401, max: 500 },
  { range: '501-600', min: 501, max: 600 },
  { range: '601-700', min: 601, max: 700 },
  { range: '701-800', min: 701, max: 800 },
  { range: '801-900', min: 801, max: 900 },
  { range: '901-above', min: 901, max: Infinity },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    const { month } = req.body;

    if(req.method === 'POST'){
      const monthNumber = monthMap[month.toLowerCase()] || 1;

      if (!monthNumber) {
        return res.status(400).json({ message: "Invalid month provided" });
      }
         
      const data = await Promise.all(priceRanges.map(async range => {
        const count = await ProductTransaction.aggregate([
          {
            $match: {
              $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] },
              price: { $gte: range.min, $lte: range.max },
            }
          },
          {
            $count: "count"
          }
        ]);
      
        return {
          range: range.range,
          count: count.length > 0 ? count[0].count : 0
        };
      }));
      
      console.log(data); // Debugging: Check the result here
      if (data.length === 0) {
        return res.status(404).json({ message: "No data found for the specified month" });
      } 
      res.status(200).json(data);   
    }else{
      res.status(500).json({ message: 'Method not Allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bar chart data', error });
  }
}
