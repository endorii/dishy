const Router = require('express');
const Employee = require('../models/Employee');
const authMiddleware = require('../middlewares/auth.middleware');
const router = new Router();

router.post('/employees', authMiddleware,
    async (req, res) => {
        try {

            const { name, login, pin, position } = req.body;

            const candidate = await Employee.findOne({ user: req.user.id, pin });

            if (candidate) {
                return res.status(400).json({ message: `Користувач пін-кодом ${pin} вже існує` })
            }

            const employee = new Employee({ user: req.user.id, name, login, pin, position });

            await employee.save();

            return res.json({ message: 'Працівника було додано' });

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" })
        }
    }
);

router.get('/employees', authMiddleware,
    async (req, res) => {
        try {
            const employees = await Employee.find({ user: req.user.id });

            return res.json({ employees });

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    }
);

router.put('/employees/:_id', authMiddleware,
    async (req, res) => {
        try {
            const { _id } = req.params;
            const { name, login, pin, position } = req.body;

            const updatedEmployee = await Employee.findOneAndUpdate(
                { _id },
                { user: req.user.id, name, login, pin, position },
                { new: true }
            );

            if (!updatedEmployee) {
                return res.status(404).json({ message: `Employee with id ${_id} not found` });
            }

            return res.json({ message: "Employee was updated" });
        } catch (e) {
            console.log(e);
            res.send({ message: "Server error" });
        }
    });

router.delete('/employees/:_id', authMiddleware,
    async (req, res) => {
        try {
            const { _id } = req.params;

            const updatedEmployee = await Employee.findOneAndDelete({ _id });

            if (!updatedEmployee) {
                return res.status(404).json({ message: `Employee with id ${_id} not found` });
            }

            return res.json({ message: "Employee was deleted" });
        } catch (e) {
            console.log(e);
            res.send({ message: "Server error" });
        }
    });

router.get('/currentEmployee', authMiddleware,
    async (req, res) => {
        try {
            const currentEmployee = await Employee.findOne({ user: req.user.id, isCurrent: true });
            return res.json({ currentEmployee });
        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" });
        }
    }
);

router.post('/currentEmployee', authMiddleware,
    async (req, res) => {
        try {
            const { pin } = req.body;
            const currentEmployee = await Employee.findOne({ pin, user: req.user.id });
            if (currentEmployee) {

                await Employee.updateMany({ user: req.user.id }, { isCurrent: false });

                await Employee.updateOne({ _id: currentEmployee._id }, { isCurrent: true });

            } else {
                res.status(404).json({ message: 'Співробітник не знайдений' });
            }
        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" })
        }
    }
);

router.put('/currentEmployee', authMiddleware,
    async (req, res) => {
        try {
            const currentEmployee = await Employee.findOneAndUpdate(
                { isCurrent: true, user: req.user.id }, // умова пошуку
                { isCurrent: false, user: req.user.id }, // оновлення поля
                { new: true } // повернення оновленого документа
            );

            if (!currentEmployee) {
                return res.status(404).json({ message: 'Співробітник не знайдений' });
            }

            res.json({ message: 'Співробітник успішно оновлений', employee: currentEmployee });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Помилка сервера' });
        }
    });



module.exports = router;