const Router = require('express');
const Menu = require('../models/Menu');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

router.post('/menu', authMiddleware,
    async (req, res) => {
        try {

            const { category, logo } = req.body;

            const candidate = await Menu.findOne({user: req.user.id, category});
            if (candidate) {
                return res.status(400).json({message: 'Невірний запит', errors})
            }
            const menuCategory = new Menu({ user: req.user.id, logo, category })

            await menuCategory.save();

            return res.json({ message: 'Категорію меню було додано' });

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    });

module.exports = router;