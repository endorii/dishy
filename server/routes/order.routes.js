const Router = require("express");
const Order = require("../models/Order");
const authMiddleware = require("../middlewares/auth.middleware");

const router = new Router();

router.post('/orders', authMiddleware, 
    async (req, res) => {
        try {
            
        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" })
        }
    }
);