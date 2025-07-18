import Category from '../models/category.model.js';

import { v2 as cloudinary } from 'cloudinary';
import fs, { symlink } from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_SECRET,
    secure: true
});

// [POST] /api/category/uploadImages
var imagesArr = []
export async function uploadImages(req, res) {
    try {
        imagesArr = []

        const image = req.files;

        const options = {
            user_filename: true,
            unique_filename: false,
            overwrite: false
        }

        for(let i = 0; i < image?.length; i++) {
            const img = await cloudinary.uploader.upload(
                image[i].path,
                options,
                function (error, result) {
                    console.log(result)
                    imagesArr.push(result.secure_url);
                    fs.unlinkSync(`uploads/${req.files[i].filename}`);
                    console.log(req.file[i].filename)
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

// [POST] /api/category/create
export async function createCategory(req, res) {
    try {
        let category = new Category({
            name: res.body.name,
            images: imagesArr,
            parentCatName: req.body.parentCatName,
            parentId: req.body.parentId
        })
        if(!category){
            return res.status(500).json({
                message: "category not created",
                error: true,
                success: false
            })
        }

        await category.save();

        imagesArr = []

        return res.status(200).json({
            message: "Category created",
            error: false,
            success: true,
            category: category
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/category/
export async function getCategories(req, res) {
    try {
        const categories = await Category.find();
        const categoryMap = {};

        categories.forEach(cat => {
            categoryMap[cat._id] = { ...cat._doc, children: [] };
        })

        const rootCategories = [];

        categories.forEach(cat => {
            if(cat.parentId){
                categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
            } else {
                rootCategories.push(categoryMap[cat._id])
            }
        })

        return res.status(200).json({
            error: false,
            success: true,
            data: rootCategories
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/category/get/count
export async function getCategoriesCount(req, res) {
    try {
        const categoryCount = await Category.countDocuments({parentId: undefined});
        if(!categoryCount){
            res.status(500).json({
                error: true,
                success: false
            })
        } else {
            res.send({
                categoryCount: categoryCount
            })
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/category/get/count/subCat
export async function getSubCategoriesCount(req, res) {
    try {
        const categories = Category.find();
        if(!categories){
            res.status(500).json({
                error: true,
                success: false
            })
        } else {
            const subCatList = [];
            for(let cat of categories){
                if(cat.parentId !== undefined){
                    subCatList.push(cat);
                }
            }

            res.status(200).send({
                subCategoryCount: subCatList.length
            })
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/category/:id
export async function getCategory(req, res){
    try {
        const id = req.params.id;
        const category = await Category.findOne({_id: id});
        if(!category) {
            res.status(500).json({
                message: "The category with the given ID was not found",
                error: true,
                success: false
            })
        }

        res.status(200).json({
            error: false,
            success: true,
            category: category
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/category/deleteImage
export async function removeImageFromCloudinary(req, res) {
    const imgUrl = req.query.img;

    const urlArr = imgUrl.split("/");

    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    if(imageName) {
        try {
            const result = await cloudinary.uploader.destroy(imageName);

            if(result) {
                res.status(200).send(result)
            }
        } catch (error) {
            return res.status(500).json({
                message: error.message || error,
                error: true,
                success: false
            })
        }
    }
}

// [DELETE] /api/category/:id
export async function deleteCategory(req, res){
    try {
        const id =  req.params.id;
        const category = await Category.findOne({_id: id});
        if(!category){
            return res.status(404).json({
                message: "Category not found",
                error: true,
                success: false
            })
        }

        const images = category.images;
        for(const img of images){
            const imgArr = img.split("/");
            const imageName = imgArr[imgArr.length - 1].split(".")[0];

            if(imageName){
                cloudinary.uploader.destroy(imageName, (error, result) => {
                    console.log(error, result);
                })
            }
        }

        const subCategory = await Category.find({parentId: id});

        for(let i = 0; i < subCategory.length; i++){

            const thirdSubCategory = await Category.find({parentId: subCategory[i]._id});

            for(let j = 0; j < thirdSubCategory.length; j++){
                await Category.findByIdAndDelete(thirdSubCategory[j]._id)
            }

            await Category.findByIdAndDelete(subCategory[i]._id);
        }

        await Category.findByIdAndDelete(id);

        res.status(200).json({
            message: "Category deleted",
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

// [POST] /api/category/:id
export async function updateCategory(req, res) {
    try {
        const id = req.params.id;
        const category = await Category.findByIdAndUpdate(id, {
            name: req.body.name,
            images: imagesArr.length > 0 ? imagesArr[0] : req.body.images,
            parentId: req.body.parentId,
            parentCatName: req.body.parentCatName
        }, { new: true })

        if(!category){
            return res.status(500).json({
                message: "Category cannot be updated",
                error: true,
                success: false
            })
        }

        imagesArr = [];

        res.status(200).json({
            category: category,
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