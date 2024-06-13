const express = require("express")
const router = express.Router();
const cart = require('../model/cart_schema')

router.use(express.json());

// Add Product To Cart
router.post("/addCart", async (req, res) => {
    const product = req.body;
    try {
        const data = await cart(product).save();
        // res.send(200).json({message: "Product Added.", data})
    } catch (err) {
        console.log(err)
        res.json({message: "Unable To Add."})
    }
})

// Get Product From Cart
router.get("/view", async (req, res) => {
    try {
        const data = await cart.find();
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
