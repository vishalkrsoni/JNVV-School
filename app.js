const express = require('express');
const dotenv = require('dotenv');
const { mongo_connector } = require('./app/Services/mongo_connector')
const cookieParser = require('cookie-parser');
// const authRouter = require('./routes/authRouter');
// const studentRouter = require('./routes/empRouter');

const app = express();
dotenv.config()
const port = process.env.PORT
mongo_connector()

// MiddleWares

app.use(express.json())
app.use(cookieParser())

// app.use('/', authRouter)
// app.use('/', studentRouter)

app.listen(port, () => console.log(`server started at port ${port}`))