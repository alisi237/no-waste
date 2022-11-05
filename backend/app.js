const express = require('express')

const AppError = require('./utils/AppError')
const globalErrorHandler = require('./controllers/errorController')
const grocerieRouter = require('./routes/grocerieRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()

app.use(express.json())

// 1) MIDDLEWARES
console.log(process.env.NODE_ENV)
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  // console.log(req.headers)
  next()
})

// 2) ROUTES
app.use('/api/v1/groceries', grocerieRouter)
app.use('/api/v1/users', userRouter)

module.exports = app