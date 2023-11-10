const Router = require('express');
const Menu = require('../models/Menu');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

router.post('/menu', authMiddleware,
    async (req, res) => {
        try {

            const { title, logo } = req.body;

            const menuCategory = new Menu({ user: req.user.id, title, logo })

            await menuCategory.save();

            return res.json({ message: 'Категорію меню було додано' });

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    });

module.exports = router;