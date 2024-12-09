import express from "express";
import { delprod, postprod, getprod, updateprod } from "../controllers/product.js";

const router = express.Router();

// POST
router.post("/", postprod);

//GET
router.get("/", getprod);

//DELETE
router.delete("/:id", delprod);

//UPDATE
router.put("/:id", updateprod);

export default router;
