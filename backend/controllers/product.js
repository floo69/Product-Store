import Product from "../models/Products.js";
import mongoose from "mongoose";

export const getprod =  async (req, res) => {
    try {
      const product = await Product.find({});
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      console.error("Error: ", error.message);
      res.status(500).json({ success: false, message: "server error" });
    }
  }

export const postprod = async (req, res) => {
    const product = req.body;
  
    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all fields" });
    }
  
    const newProduct = new Product(product);
  
    try {
      await newProduct.save();
      res.status(201).json({ success: true, data: "new product" });
    } catch (error) {
      console.error("Error: ", error.message);
      res.status(500).json({ success: false, message: "server error" });
    }
  }

export const delprod = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, messsage: "Product deleted" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Product not found" });
    }
  }

export const updateprod = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404);
    }
    try {
      // product is the update object
      const updated = await Product.findByIdAndUpdate(id, product, { new: true }); //Model.findByIdAndUpdate(id, update [options, callback] - optional
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }  
