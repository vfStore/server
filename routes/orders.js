import express from "express";
const router = express.Router();
import Order from "../models/Order.js";

router.get("/orders", async (req, res) => {
  console.log();

  try {
    const orders = await Order.find(); // Query the database for all orders
    console.log(orders);
    res.status(200).json(orders); // Return the orders as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Return a status code of 500 (Internal Server Error) if there is an issue
  }
});

router.get("/orders/all", async (req, res) => {
  try {
    const orders = await Order.find(); // Query the database for all orders
    res.status(200).json(orders); // Return the orders as a JSON response
  } catch (error) {
    res.status(500).json(error); // Return a status code of 500 (Internal Server Error) if there is an issue
  }
});

router.post("/order", async (req, res) => {
  const order = new Order({
    order: req.body.order,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    phone: req.body.phone,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/order/:id", async (req, res) => {
  try {
    // const course = await Course.findByIdAndDelete(req.params.id);
    const order = await Order.findOneAndDelete({
      _id: req.params.id,
    });
    if (!order) {
      return res.status(404).send();
    }
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;
