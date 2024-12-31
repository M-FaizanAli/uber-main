const dotenv = require('dotenv');
dotenv.config();
const express  = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes')
const app = express();
const connectToDb = require('./db/db'); 
const cookieParser = require('cookie-parser');

connectToDb();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes);
app.get('/login', (req, res) => {
    res.send('Hello Login!');
});

app.use('/', userRoutes);


module.exports = app;