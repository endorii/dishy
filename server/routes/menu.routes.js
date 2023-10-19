const Router = require('express');
const Menu = require('../models/Menu');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

router.post('/menu',
    async (req, res) => {
        try {
            const {logo, title, items:[{name, src, value, time, amount}]} = req.body;
            
            const menuCategory = new Menu({logo, title, items:[{name, src, value, time, amount}]});

            await menuCategory.save();

        } catch (e) {
            console.log(e);
            res.send({message: "Помилка сервера"})
        }
    }    
)

module.exports = router;