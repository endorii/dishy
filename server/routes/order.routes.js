const Router = require("express");
const Order = require("../models/Order");
const authMiddleware = require("../middlewares/auth.middleware");

const router = new Router();

router.post('/orders', authMiddleware,
    async (req, res) => {
        try {
            const { order } = req.body;

            const newOrder = new Order({ user: req.user.id, order });

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

module.exports = router;