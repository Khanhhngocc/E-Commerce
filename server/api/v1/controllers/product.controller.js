import Product from '../models/product.model.js';

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    secure: true
})

// [POST] /api/product/uploadImages
var imagesArr = []
export async function uploadImages(req, res) {
    try {
        imagesArr = [];

        const image = req.files;

        const option = {
            user_filename: true,
            unique_filename: false,
            overwrite: false
        }

        for(let i = 0; i < image?.length; i++){
            const img = await cloudinary.uploader.upload(
                image[i].path,
                option,
                function (error, result) {
                    imagesArr.push(result.secure_url);
                    fs.unlinkSync(`uploads/${req.files[i].filename}`);
                    console.log(req.files[i].filename)
                }
            )
        }

        return res.status(200).json({
            images: imagesArr
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [POST] /api/product/create
export async function createProduct(req, res) {
    try {
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            images: imagesArr,
            brand: req.body.brand,
            price: req.body.price,
            oldPrice: req.body.oldPrice,
            catName: req.body.catName,
            catId: req.body.catId,
            subCatId: req.body.subCatId,
            subCat: req.body.subCat,
            thirdsubCat: req.body.thirdsubCat,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            isFeature: req.body.isFeature,
            discount: req.body.discount,
            productRam: req.body.productRam,
            size: req.body.size,
            productWeight: req.body.productWeight,
            productRam: req.body.productRam,
        });

        await product.save();

        if(!product){
            return res.status(500).json({
                message: "Product not created",
                error: true,
                success: false
            })
        }

        imagesArr = [];

        return res.status(200).json({
            message: "Product created successfully",
            error: false,
            success: true,
            product: product
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProducts
export async function getAllProduct(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const totalProducts = await Product.countDocuments();
        const totalPages = Math.ceil(totalProducts / perPage);

        if(page > totalPages){
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            })
        }

        const products = await Product
        .find()
        .populate("category")
        .limit(perPage)
        .skip((page - 1) * perPage)
        .exec();

        if(!products){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsByCatId/:id
export async function getAllProductsByCatId(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const totalProducts = await Product.countDocuments();
        const totalPages = Math.ceil(totalProducts / perPage);

        if(page > totalPages){
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            })
        }

        const products = await Product
        .find({ catId: req.params.id })
        .populate("category")
        .limit(perPage)
        .skip((page - 1) * perPage)
        .exec

        if(!products){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsByCatName/
export async function getAllProductsByCatName(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const totalProducts = await Product.countDocuments();
        const totalPages = Math.ceil(totalProducts / perPage);

        if(page > totalPages){
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            })
        }

        const products = await Product
        .find({ catName: req.query.catName })
        .populate("category")
        .limit(perPage)
        .skip((page - 1) * perPage)
        .exec

        if(!products){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsBySubCatId/:id
export async function getAllProductsBySubCatId(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const totalProducts = await Product.countDocuments();
        const totalPages = Math.ceil(totalProducts / perPage);

        if(page > totalPages){
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            })
        }

        const products = await Product
        .find({ subCatId: req.params.id })
        .populate("category")
        .limit(perPage)
        .skip((page - 1) * perPage)
        .exec

        if(!products){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsBySubCatName/
export async function getAllProductsBySubCatName(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const totalProducts = await Product.countDocuments();
        const totalPages = Math.ceil(totalProducts / perPage);

        if(page > totalPages){
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            })
        }

        const products = await Product
        .find({ subCat: req.query.subCat })
        .populate("category")
        .limit(perPage)
        .skip((page - 1) * perPage)
        .exec

        if(!products){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsBySubCatId/:id
export async function getAllProductsByThirdLevelCatId(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const totalProducts = await Product.countDocuments();
        const totalPages = Math.ceil(totalProducts / perPage);

        if(page > totalPages){
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            })
        }

        const products = await Product
        .find({ thirdsubCatId: req.params.id })
        .populate("category")
        .limit(perPage)
        .skip((page - 1) * perPage)
        .exec

        if(!products){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsByCatName
export async function getAllProductsByThirdLevelName(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const totalProducts = await Product.countDocuments();
        const totalPages = Math.ceil(totalProducts / perPage);

        if(page > totalPages){
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            })
        }

        const products = await Product
        .find({ thirdsubCat: req.query.thirdsubCat })
        .populate("category")
        .limit(perPage)
        .skip((page - 1) * perPage)
        .exec

        if(!products){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsByPrice
export async function getAllProductsByPrice(req, res){
    try {
        let productsList = [];

        if(req.query.catId !== "" && req.query.catId !== undefined){
            const productsListArr = await Product.find({ catId: req.query.catId });
            productsList = productsListArr
        }

        if(req.query.subCatId !== "" && req.query.subCatId !== undefined){
            const productsListArr = await Product.find({ subCatId: req.query.subCatId });
            productsList = productsListArr
        }

        if(req.query.thirdsubCatId !== "" && req.query.thirdsubCatId !== undefined){
            const productsListArr = await Product.find({ thirdsubCatId: req.query.thirdsubCatId });
            productsList = productsListArr
        }

        const filteredProducts = productsList.filter((product) => {
            if(req.query.minPrice && product.price < req.query.minPrice){
                return false
            }
            if(req.query.maxPrice && product.price > req.query.maxPrice){
                return false
            }
            return true
        })

        return res.status(200).json({
            error: false,
            success: true,
            products: filteredProducts,
            totalPages: 0,
            page: 0
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsByRating
export async function getAllProductsByRating(req, res) {
    try {
        const page = req.query.page;
        const perPage = req.query.perPage;
        const totalProducts = await Product.countDocuments();
        const totalPages = Math.ceil(totalProducts / perPage);

        if(page > totalPages){
            return res.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            })
        }

        const products = await Product
        .find({ rating: req.query.rating })
        .populate("category")
        .limit(perPage)
        .skip((page - 1) * perPage)
        .exec

        if(!products){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: true,
            success: false,
            products: products,
            totalPages: totalPages,
            page: page
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsCount
export async function getAllProductsCount(req, res){
    try {
        const productsCount = await Product.countDocuments();

        if(!productsCount){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: true,
            success: false,
            productsCount: productsCount
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/product/getAllProductsCount
export async function getAllFeaturedProducts(req, res){
    try {
        const products = await Product
        .find({ isFeature: true })
        .populate("category");

        if(!products){
            return res.status(500).json({
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: true,
            success: false,
            products: products
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [DELETE] /api/product/:id
export async function deleteProduct(req, res){
    const product = await Product.findOne({ _id: req.params.id });

    if(!product){
        return res.status(404).json({
            message: "Product not found",
            error: true,
            success: false
        })
    }

    const images = product.images;

    for(let img of images){
        const urlArr = img.split("/");
        const image = urlArr[urlArr.length - 1];
        const imageName = image.split(".")[0];

        if(imageName){
            cloudinary.uploader.destroy(imageName, (error, result) => {
                console.log(error, result)
            })
        }
    }

    try {
        await Product.findByIdAndDelete(req.params.id); 
        
        return res.status(200).json({
            message: "Product deleted",
            error: false,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Product not deleted",
            error: true,
            success: false
        })
    }

}

// [GET] /api/product/:id
export async function getProduct(req, res){
    try {
        const product = await Product.findOne({ _id: req.params.id });

        if(!product){
            return res.status(404).json({
                message: "The product is not found",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            error: true,
            success: false,
            product: product
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export async function removeImageFromCloudinary(req, res){
    const imgUrl = req.query.img;

    const imgArr = imgUrl.split("/");
    const image = imgArr[imgArr.length - 1];
    const imageName = image.split(".")[0];

    if(imageName){
        const res = cloudinary.uploader.destroy(
            imageName,
            (error, result) => {
                console.log(error, res)
            }
        )

        if(res){
            res.status(200).send(res);
        }
    }
}

export async function updateProduct(req, res){
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            subCat: req.body.subCat,
            description: req.body.description,
            images: req.body.images,
            brand: req.body.brand,
            price: req.body.price,
            oldPrice: req.body.oldPrice,
            catName: req.body.catName,
            catId: req.body.catId,
            subCatId: req.body.subCatId,
            subCat: req.body.subCat,
            thirdsubCat: req.body.thirdsubCat,
            thirdsubCatId: req.body.thirdsubCatId,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            isFeature: req.body.isFeature,
            productRam: req.body.productRam,
            size: req.body.size,
            productWeight: req.body.productWeight,
        }, { new: true })

        if(!product){
            res.status(404).json({
                message: "The product can not be updated!",
                error: true,
                success: false
            })
        }

        imagesArr = [];

        return res.status(200).json({
            message: "The product is updated",
            error: false,
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}