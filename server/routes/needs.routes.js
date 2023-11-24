const Router = require("express");
const Needs = require("../models/Needs");
const authMiddleware = require("../middlewares/auth.middleware");

const router = new Router();

router.post('/needs', authMiddleware,
    async (req, res) => {
        try {
            const { content, from, date } = req.body;

            const newNeed = new Needs({ user: req.user.id, content, from, date});

            await newNeed.save();

            return res.json({ message: 'Бажання/потребу було додано' });
        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    });

router.get('/needs', authMiddleware,
    async (req, res) => {
        try {
            const needs = await Needs.find({ user: req.user.id });
            return res.json({ needs })

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    })

router.delete('/needs/:_id', authMiddleware,
    async (req, res) => {
        try {
            const { _id } = req.params;

            const findedNeed = await Needs.findOneAndDelete({ _id });

            if (!findedNeed) {
                return res.status(404).json({ message: `Need with id ${_id} not found` });
            }

            return res.json({ message: "Need was deleted" });
        } catch (e) {
            console.log(e);
            res.send({ message: "Server error" });
        }
    });

module.exports = router;