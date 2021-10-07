const express = require('express');
const router = express.Router();

const ProductController = require("../controllers/products");

router.get("", ProductController.getProducts);
router.get("/:id", ProductController.getProductId);
router.post("/", ProductController.save);

module.exports = router;