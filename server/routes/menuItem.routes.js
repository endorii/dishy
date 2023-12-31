const Router = require('express');
const MenuItem = require('../models/MenuItem');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

router.post('/menuItems', authMiddleware,
    async (req, res) => {
        try {

            const { dishName, dishPrice, dishTime, dishAmount, dishWeight, dishCategory, dishIngredients, dishLogo } = req.body;

            const candidate = await MenuItem.findOne({ user: req.user.id, name: dishName });
            if (candidate) {
                return res.status(400).json({ message: 'Невірний запит', errors })
            }

            const menuItem = new MenuItem({ user: req.user.id, name: dishName, value: dishPrice, time: dishTime, amount: dishAmount, weight: dishWeight, toCategory: dishCategory, ingredients: dishIngredients, src: dishLogo })

            await menuItem.save();

            return res.json({ message: 'Страву було додано' });

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    });

router.get('/menuItems', authMiddleware,
    async (req, res) => {
        try {
            const menuItems = await MenuItem.find({ user: req.user.id })
            return res.json({ menuItems })

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    })

router.put('/menuItems/:_id', authMiddleware,
    async (req, res) => {
        try {
            const { _id } = req.params;
            const { dishName, dishPrice, dishTime, dishAmount, dishWeight, dishCategory, dishIngredients, dishLogo } = req.body;

            const updatedMenuItem = await MenuItem.findOneAndUpdate(
                { _id },
                { user: req.user.id, name: dishName, value: dishPrice, time: dishTime, amount: dishAmount, weight: dishWeight, toCategory: dishCategory, ingredients: dishIngredients, src: dishLogo },
                { new: true }
            );

            if (!updatedMenuItem) {
                return res.status(404).json({ message: `Товар з id ${_id} не знайдено` });
            }

            return res.json({ message: "Товар було оновлено" });
        } catch (e) {
            console.log(e);
            res.send({ message: "Server error" });
        }
    });

router.delete('/menuItems/:_id', authMiddleware,
    async (req, res) => {
        try {

            const { _id } = req.params;

            const menuItems = await MenuItem.findOneAndDelete({ user: req.user.id, _id })

            if (!menuItems) {
                return res.status(404).json({ message: `Товар з id ${_id} не знайдено` });
            }

            return res.json({ message: "Товар було видалено" });

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    })

module.exports = router;