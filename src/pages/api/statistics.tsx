import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import ProductTransaction from "@/models/ProductTransaction";






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
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const { month } = req.body;

    if(req.method === 'POST'){
      const monthNumber = monthMap[month.toLowerCase()] || 1;

      if (!monthNumber) {
        return res.status(400).json({ message: "Invalid month provided" });
      }
      
      const totalSalesAmount = await ProductTransaction.aggregate([
        {
          $match: {
            $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] }
          }
        },
        {
          $group: {
            _id: null,
            totalSales: { $sum: "$price" },
            averagePrice: { $avg: "$price" },
            totalItemsSold: { $sum: { $cond: ["$sold", 1, 0] } },
            totalItemsNotSold: { $sum: { $cond: [{ $not: "$sold" }, 1, 0] } }
          }
        }
      ]);
      
      if (totalSalesAmount.length === 0) {
        return res.status(404).json({ message: "No data found for the specified month" });
      }
      
      res.status(200).json({
        totalSales: totalSalesAmount[0]?.totalSales.toFixed(2) || 0,
        averagePrice: totalSalesAmount[0]?.averagePrice.toFixed(2) || 0,
        totalItemsSold: totalSalesAmount[0]?.totalItemsSold || 0,
        totalItemsNotSold: totalSalesAmount[0]?.totalItemsNotSold || 0,
      });   
    res.status(200).json({
      totalSalesAmount: totalSalesAmount,
    });
    }else{
      res.status(500).json({ message: 'Method not Allowed' });
    }

  
    
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}
