const Router = require("express");
const ContactText = require("../models/ContactText");
const authMiddleware = require("../middlewares/auth.middleware");

const router = new Router();

router.post('/contactTexts', authMiddleware,
    async (req, res) => {
        try {
            const { content, from, date } = req.body;

            const newContactText = new ContactText({ user: req.user.id, content, from, date});

            await newContactText.save();

            return res.json({ message: 'Повідомлення було додано' });
        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    });

router.get('/contactTexts', authMiddleware,
    async (req, res) => {
        try {
            const contactText = await ContactText.find({ user: req.user.id });
            return res.json({ contactText })

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    })

router.delete('/contactTexts/:_id', authMiddleware,
    async (req, res) => {
        try {
            const { _id } = req.params;

            const findedContactText = await ContactText.findOneAndDelete({ _id });

            if (!findedContactText) {
                return res.status(404).json({ message: `Contact text with id ${_id} not found` });
            }

            return res.json({ message: "Contact text was deleted" });
        } catch (e) {
            console.log(e);
            res.send({ message: "Server error" });
        }
    });

module.exports = router;