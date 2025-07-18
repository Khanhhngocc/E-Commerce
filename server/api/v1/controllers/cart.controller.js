import User from '../models/user.model.js';
import Product from '../models/product.model.js';
import Cart from '../models/cart.model.js';

// [POST] /api/cart/add
export const addToCardItemController = async (req, res) => {
    try {
        const userId = req.userId;
        const { productId } = req.body;

        if(!productId){
            return res.status(402).json({
                message: "Provide productId",
                error: true,
                success: false
            })
        }

        const checkItemCart = await Cart.findOne({
            userId: userId,
            productId: productId
        })

        if(checkItemCart){
            return res.status(400).json({
                message: "Item already in cart",
                error: true,
                success: false
            })
        }

        const cartItem = new Cart({
            userId: userId,
            quantity: 1,
            productId: productId
        })

        const save = await cartItem.save();

        const updateCartUser = await User.findByIdAndUpdate(userId, {
            $push: {
                shopping_cart: save._id
            }
        })

        if(!updateCartUser){
            return res.status(400).json({
                message: "Item cannot add in cart",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            data: save,
            message: "Item add successfully",
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

// [GET] /api/cart
export const getCartItemController = async (req, res) => {
    try {
        const userId = req.userId;

        const cartItem = await Cart.find({
            userId: userId
        }).populate('productId')
        
        return res.status(200).json({
            error: false,
            success: true,
            data: cartItem
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [PUT] /api/cart/update-qty
export const updateCartItemQtyController = async(req, res) => {
    try {
        const userId = req.userId;
        const { _id, qty } = req.body;

        if(!_id || !qty){
            return res.status(400).json({
                message: "Provide _id, quantity",
                error: true,
                success: false
            })
        }

        const updateCartItem = await Cart.updateOne({
            userId: userId,
            _id: _id
        }, { quantity: qty });

        return res.status(200).json({
            message: "Update cart",
            error: false,
            success: true,
            data: updateCartItem
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [DELETE] /api/cart/delete-cart-item
export const deleteCartItemQtyController = async(req, res) => {
    try {
        const userId = req.userId;
        const { _id, productId } = req.body;

        if(!_id){
            return res.status(400).json({
                message: "Provide ID",
                error: true,
                success: false
            })
        }

        const deleteCartItem = await Cart.deleteOne({
            _id: _id,
            userId: userId // Thêm cái này có vô nghĩa không?
        })

        if(!deleteCartItem){
            return res.status(404).json({
                message: "The product in the cart is not found",
                error: true,
                success: false
            })
        }

        const user = await User.findOne({
            _id: userId
        })

        const cartItem = user.shopping_cart;

        const updatedUserCart = [
            ...cartItem.slice(0, cartItem.indexOf(productId)), 
            ...cartItem.slice(cartItem.indexOf(productId) + 1)
        ] //explain

        user.shopping_cart = updatedUserCart;
        await user.save();

        return res.status(200).json({
            message: "Item remove",
            error: false,
            success: true,
            data: deleteCartItem
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}