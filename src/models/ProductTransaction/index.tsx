import mongoose, { Document, Schema } from 'mongoose';

interface IProductTransaction extends Document {
  id: number;
  title: string;
  description: string;
  price: number;
  dateOfSale:Date;
  category: string;
  sold: boolean;
}

const ProductTransactionSchema: Schema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Ensure unique ids
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dateOfSale: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true, // Fixed this from require to required
  },
  sold: {
    type: Boolean,
    required: true,
  },
});

const ProductTransaction =
  mongoose.models.transactions ||
  mongoose.model<IProductTransaction>('transactions', ProductTransactionSchema);

export default ProductTransaction;
