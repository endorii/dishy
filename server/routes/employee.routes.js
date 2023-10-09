const Router = require('express');
const Employee = require('../models/Employee');
const authMiddleware = require('../middlewares/auth.middleware');
const CurrentEmployee = require('../models/CurrentEmployee');

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

router.get('/currentEmployee', authMiddleware,
    async (req, res) => {
        try {
            const employee = await CurrentEmployee.findOne({ user: req.user.id });

            console.log(employee);
            return res.json({ employee });

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
            const employee = await Employee.findOne({ pin, user: req.user.id });
            if (employee) {

                const currentEmployee = new CurrentEmployee({ ...employee._doc })

                await currentEmployee.save();

                return res.json(currentEmployee);
            } else {
                res.status(404).json({ message: 'Співробітник не знайдений' });
            }

        } catch (e) {
            console.log(e);
            res.send({ message: "Помилка сервера" })
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

router.delete('/currentEmployee/:_id', authMiddleware,
    async (req, res) => {
        try {
            const { _id } = req.params;

            const employee = await CurrentEmployee.findOneAndDelete({ _id });

            if (!employee) {
                return res.status(404).json({ message: `Employee with id ${_id} not found` });
            }

            return res.json({ message: "Employee was deleted" });
        } catch (e) {
            console.log(e);
            res.send({ message: "Server error" });
        }
    });

module.exports = router;