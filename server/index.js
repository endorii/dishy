const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const employeesRouter = require('./routes/employee.routes');
const app = express();
const PORT = config.get('PORT')
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/", employeesRouter);

const start = async () => {
    try {
        mongoose.connect(config.get('DBURL'));

        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();