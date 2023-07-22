const shopModel = require('../models/ShopModel')
const APIFeature = require('../utils/apiFeature')
const catchAsync = require("../utils/catchAsync")
const createShop = catchAsync(async (req, res, next) => {
    let _reqBody = req.body;
    const shop = await shopModel.create(_reqBody);

    if (!shop) {
        const err = new AppError(`Unable to Create Post`, "501")
        return next(err);
    }

    res.status(200).json({ status: 'success', data: shop });

})

const getAllShops = catchAsync(async (req, res, next) => {
    let DBQuery = shopModel.find();
    let apiFeatureReq = new APIFeature(DBQuery, req.query)
    const posts = await apiFeatureReq.DBQuery;

    if (!posts) {
        const err = new AppError('Error in Finding Post', "404")
        return next(err);
    }

    return res.status(200).json({ status: 'success', data: posts });

})

module.exports = {
    createShop,
    getAllShops
}