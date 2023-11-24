const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const employeesRouter = require('./routes/employee.routes');
const positionsRouter = require('./routes/positions.rotes');
const menuRouter = require('./routes/menu.routes');
const menuItemRouter = require('./routes/menuItem.routes');
const ordersRouter = require("./routes/order.routes");
const needsRouter = require("./routes/needs.routes")
const contactTextsRouter = require('./routes/contactTexts.routes');
const app = express();
const PORT = config.get('PORT')
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/", employeesRouter);
app.use("/api/", positionsRouter);
app.use("/api/", menuRouter);
app.use("/api/", menuItemRouter);
app.use("/api/", ordersRouter);
app.use('/api/', needsRouter);
app.use('/api/', contactTextsRouter);

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