import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    order: { type: Array },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    timestamp: {
      type: Date,
      default: () => {
        const twoHoursAhead = new Date();
        twoHoursAhead.setHours(twoHoursAhead.getHours() + 2);
        return twoHoursAhead;
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
