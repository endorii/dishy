const Router = require('express');
const MenuItem = require('../models/Menu');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

router.post('/menuItem', authMiddleware,
    async (req, res) => {
        try {

            const { name, src, value, time, amount, weight, category, ingredients } = req.body;

            const menuItem = new MenuItem({ user: req.user.id, name, src, value, time, amount, weight, category, ingredients })

            await menuItem.save();

            return res.json({ message: 'Страву було додано' });

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    });

module.exports = router;