import Product from "../models/product.js"
import isAdmin from "./userController.js"

export async function createProduct(req, res){  //create(post)

    if(!isAdmin(req)){
        res.status(403).json({
            message : "Access denied. Admin only."
        })
        return
    }

    try {

        const existingProduct = await Product.findOne({
            productID : req.body.productID
        })

        if(existingProduct != null){
            res.status(400).json({
                message : "Product with this productID already exists."
            })

            return
        }

        const newProduct = new Product({
            productID : req.body.productID,
            name : req.body.name,
            altNames : req.body.altNames,
            price : req.body.price,
            labelledPrice : req.body.labelledPrice,
            description : req.body.description,
            images : req.body.images,
            brand : req.body.brand,
            model : req.body.model,
            category : req.body.category,
            isAvailable : req.body.isAvailable,
            stock : req.body.stock

        })

        await newProduct.save()

        res.status(201).json({
            message : "Product created succesfully."
        })
        
    } catch (error) {
        res.status(500).json({
            message : "Error creating product"
        })
        
    }



}

export async function getAllProducts(req, res){  //read(get)
    try {
        if (isAdmin(req)) {
            const products = await Product.findOne()
            
            res.json(products)
        } else {
            const products = await Product.find({ isAvailable: true });

            res.json(products)
        }
    } catch (error) {
        res.status(500).json({
            message: "Error fetching products",
        })
    }

}

export async function deleteProduct(req, res){ //delete
    if(!isAdmin(req)){
        res.status(403).json({
            message: "Access denied. Admins only.",
        })
        return
    }

    try {
        await Product.deleteOne({  //delete
            productID: req.body.productID
        })
        res.json({
            message: "Product deleted succesfully. "
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error deleting product",
        })
    }
}

export async function updateProduct(req, res){ //put
    if(!isAdmin(req)){
        res.status(403).json({
            message: "Access denied. Admins only.",
        })
        return
    }

    try {
        await Product.updateOne({
            productID: req.params.productID
        }, {
                name : req.body.name,
                altNames : req.body.altNames,
                price : req.body.price,
                labelledPrice : req.body.labelledPrice,
                description : req.body.description,
                images : req.body.images,
                brand : req.body.brand,
                model : req.body.model,
                category : req.body.category,
                isAvailable : req.body.isAvailable,
                stock : req.body.stock
        })
        res.json({
            message: "Product updated succesfully. "
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error updating product",
        })
    }
}

export async function getProductbyID(req, res){  //get specific product details; when given a productId
    try {
        const product = await Product.findOne({
            productID: req.params.productID
        })
        if(product == null){
            res.status(404).json({
                message: "Product not found"
            })
        }else{
            if(product.isAvailable){
                res.json(product)
            }else{
                res.status(403).json({
                    message: "Access denied.Admin only"
                })
            }
        }

    } catch (error) {
        
    }
}