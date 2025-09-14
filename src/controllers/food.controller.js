const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function createFood(req, res) {
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuidv4());
    const foodItem = await foodModel.create({
        name: req.body.name,
        video: fileUploadResult.url,
        foodPartnerId: req.foodPartner._id,
        description: req.body.description
    })
    res.status(201).json({
        message: "Food created successfully",
        foodItem
    })
}

async function getFoodItems(req, res) {
    const foodItems = await foodModel.find();
    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}

module.exports = {
    createFood,
    getFoodItems
}