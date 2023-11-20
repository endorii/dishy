const Router = require("express");
const Order = require("../models/Order");
const authMiddleware = require("../middlewares/auth.middleware");

const router = new Router();

router.post('/orders', authMiddleware,
    async (req, res) => {
        try {
            const { order, openingTime, tableNumber } = req.body;

            const newOrder = new Order({ user: req.user.id, order, openingTime, tableNumber });

            await newOrder.save();

            return res.json({ message: 'Замовлення було додано' });
        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    });

router.get('/orders', authMiddleware,
    async (req, res) => {
        try {
            const orders = await Order.find({ user: req.user.id });
            return res.json({ orders })

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    })

router.put('/orders/:_id', authMiddleware,
    async (req, res) => {
        try {
            const { _id } = req.params;

            const updatedOrder = await Order.findOneAndUpdate({ _id }, { user: req.user.id, isOpen: false }, { new: true });

            if (!updatedOrder) {
                return res.status(404).json({ message: `Замовлення з _id ${_id} не знайдено` });
            }

            return res.json({ message: 'Замовлення було оновлено' });
        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    });
module.exports = router;