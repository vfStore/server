import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  order: { type: Array },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
});

export default mongoose.model("Order", orderSchema);
