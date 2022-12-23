import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    default: 0,
  },
  unitKind: {
    type: String,
  },
});

export default mongoose.model("Product", productSchema);
