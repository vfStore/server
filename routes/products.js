import express from "express";
const router = express.Router();
import Product from "../models/Product.js";

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single product
router.get("/:id", (req, res) => {
  res.json(res.product);
});

// Create a new product
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    unitKind: req.body.unitKind,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a product
// router.patch("/:id", async (req, res) => {
//   if (req.body.name != null) {
//     res.product.name = req.body.name;
//   }
//   if (req.body.price != null) {
//     res.product.price = req.body.price;
//   }
//   if (req.body.imageUrl != null) {
//     res.product.imageUrl = req.body.imageUrl;
//   }

//   try {
//     const updatedProduct = await res.product.save();
//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const name = req.body.name;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const allowedUpdate = ["name", "price", "imageUrl"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdate.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid updates" });
  }

  try {
    const product = await Product.findById(req.params.id);

    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();
    // const practice = await practice.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    if (!product) {
      res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  try {
    // const course = await Course.findByIdAndDelete(req.params.id);
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
    });
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;
// Middleware
