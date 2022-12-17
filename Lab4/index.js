const express = require('express');
const usersRouter = require('./routes/users.routes');
const rateRouter = require('./routes/rate.routes');
const cartRouter = require('./routes/cart.routes');
const logRouter = require('./routes/log.routes');
const deviceInfoRouter = require('./routes/deviceInfo.routes');
const categoryRouter = require('./routes/category.routes');
const brandRouter = require('./routes/brand.routes');
const deviceRouter = require('./routes/device.routes');
const cartDeviceRouter = require('./routes/cartDevice.routes');
const ordersRouter = require('./routes/orders.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/', usersRouter);
app.use('/', rateRouter);
app.use('/', cartRouter);
app.use('/', cartDeviceRouter);
app.use('/', categoryRouter);
app.use('/', deviceRouter);
app.use('/', deviceInfoRouter);
app.use('/', brandRouter);
app.use('/', ordersRouter);
app.use('/', logRouter);


app.listen(PORT, () =>  console.log(`Server started on ${PORT}`));