const Router = require('express');
const Employee = require('../models/Employee');
const authMiddleware = require('../middlewares/auth.middleware');
const { trusted } = require('mongoose');
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

router.get('/onlineEmployee', authMiddleware,
    async (req, res) => {
        try {
            const employees = await Employee.find({ isOnline: true, user: req.user.id });

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

router.post('/employeeByPin', authMiddleware,
    async (req, res) => {
        try {
            const { pin } = req.body;
            const employee = await Employee.findOne({ pin, user: req.user.id });

            if (!employee) {
                return res.status(404).json({ message: "Employee not found" });
            }

            return res.json({ employee });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });
        }
    }
);

router.post('/loginEmployee', authMiddleware,
    async (req, res) => {
        try {
            const { pin } = req.body;
            const employee = await Employee.findOneAndUpdate({ pin, user: req.user.id,}, {pin, user: req.user.id, isOnline: true}, {new: true});

            if (!employee) {
                return res.status(404).json({ message: "Employee not found" });
            }

            return res.json({ employee });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });
        }
    }
);

module.exports = router;