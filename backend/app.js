const express = require('express')

const AppError = require('./utils/AppError')
const globalErrorHandler = require('./controllers/errorController')
const grocerieRouter = require('./routes/grocerieRoutes')
const userRouter = require('./routes/userRoutes')
const storageRouter = require('./routes/storageRoutes')

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
app.use('/api/v1/storages', storageRouter)

module.exports = app