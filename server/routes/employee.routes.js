const Router = require('express');
const Employee = require('../models/Employee');

const router = new Router();

router.post('/employees', 
    async (req, res) => {
        try {

            const {name, login, pin, position} = req.body;

            const candidate = await Employee.findOne({
                $or: [{ login }, { pin}]
            });

            if (candidate) {
                return res.status(400).json({message: `Користувач з поштою ${login} або пін-кодом ${pin} вже існує`})
            }

            const employee = new Employee({name, login, pin, position});

            await employee.save();

            return res.json({message: 'Працівника було додано'});

        } catch (e) {
            console.log(e);
            res.send({message: "Помилка сервера"})
        }
    }
);

module.exports = router;