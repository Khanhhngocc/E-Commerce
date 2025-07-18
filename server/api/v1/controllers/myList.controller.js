import MyList from "../models/myList.model.js";

export const addToMyListController = async (req, res) => {
    try {
        const userId = req.userId;
        const { productId, productTitle, image, rating, price, oldPrice, brand, discount } = req.body;

        const item = await MyList.findOne({
            userId: userId,
            productId: productId
        })

        if(item){
            return res.status(400).json({
                message: "Item already in my list",
                error: true,
                success: false
            })
        }

        const myList = new MyList({
            productId, userId, productTitle, image, rating, price, oldPrice, brand, discount
        })

        await myList.save();

        return res.status(200).json({
            message: "The product save in my list",
            error: true,
            success: false
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const deleteToMyListController = async (req, res) => {
    try {

        const myListItem = await MyList.findById(req.params.id);

        if(!myListItem){
            return res.status(404).json({
                message: "The item with this given id was not found",
                error: true,
                success: false
            })
        }

        const deleteItem = await MyList.findByIdAndDelete(req.params.id);
        if(!deleteItem){
            return res.status(404).json({
                message: "The item is not deleted",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "The item removed from My List",
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

export const getMyListController = async(req, res) => {
    try {
        const userId = req.userId;

        const myListItems = await MyList.find({
            userId: userId
        })

        return res.status(200).json({
            data: myListItems,
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