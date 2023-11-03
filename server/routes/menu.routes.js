const Router = require('express');
const Menu = require('../models/Menu');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

router.post('/menu', async (req, res) => {

    const menu = new MenuModel(req.body);

    try {
        await menu.save();
        res.status(201).send(menu);

    } catch (e) {
        console.log(e);
        res.send({ message: "Помилка сервера" });
    }
});

module.exports = router;