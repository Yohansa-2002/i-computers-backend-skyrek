import express from "express"
import { createProduct, getAllProducts } from "../contollers/productController.js"
import { deleteProduct, getProductbyID } from "../contollers/productController.js";
import { updateProduct } from "../contollers/productController.js"

const productRouter = express.Router();

productRouter.get("/", getAllProducts)
productRouter.post("/",createProduct)
productRouter.get("/search", ()=>{
    console.log("Search API")
})
productRouter.delete("/:productID",deleteProduct)
productRouter.put("/:productID", updateProduct)
productRouter.get("/:productId", getProductbyID)


export default productRouter