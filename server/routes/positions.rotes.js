const Router = require('express');
const Position = require('../models/Position');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

router.post('/positions', authMiddleware,
    async (req, res) => {
        try {

            const {name, permissions} = req.body;

            const position = new Position({user: req.user.id, name, permissions});

            await position.save();

            return res.json({message: 'Посаду було додано'});

        } catch (e) {
            console.log(e);
            res.send({message: "Помилка сервера"})
        }
    }
);

router.get('/positions', authMiddleware,
    async (req, res) => {
        try {
            const positions = await Position.find({user: req.user.id});

            return res.json({positions});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }
);

router.put('/positions/:_id', authMiddleware,
    async (req, res) => {
        try {
            const { _id } = req.params;
            const {name, permissions} = req.body;

            const updatedPosition = await Position.findOneAndUpdate(
                { _id },
                {name, permissions},
                { new: true}
            );

            if (!updatedPosition) {
                return res.status(404).json({ message: `Position with id ${_id} not found` });
            }

            return res.json({ message: "Position was updated"});
        } catch (e) {
            console.log(e);
            res.send({ message: "Server error" });
        }
});

router.delete('/positions/:_id', authMiddleware,
    async (req, res) => {
        try {
            const { _id } = req.params;

            const updatedPosition = await Position.findOneAndDelete({ _id });

            if (!updatedPosition) {
                return res.status(404).json({ message: `Position with id ${_id} not found` });
            }

            return res.json({ message: "Position was deleted"});
        } catch (e) {
            console.log(e);
            res.send({ message: "Server error" });
        }
});

module.exports = router;