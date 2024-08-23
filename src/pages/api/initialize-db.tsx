import type { NextApiRequest,NextApiResponse} from 'next';
import dbConnect from '@/utils/dbConnect';
import ProductTransaction from '@/models/ProductTransaction';


export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    try {
        await dbConnect();
        const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data from the third-party API');
        }
        const data = await response.json();
   
        await ProductTransaction.insertMany(data);
        res.status(200).json({ message: 'Database initialized successfully!' });
        
    } catch (error) {
        res.status(500).json({ message: 'Failed to initialize database', error });
    }   
}