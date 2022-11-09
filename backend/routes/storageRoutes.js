const express = require('express')
const storageController = require('../controllers/storageController.js')
const authController = require('../controllers/authController')

const router = express.Router()

router
  .route('/')
  .get(storageController.getAllStorages)
  .post(storageController.createStorage)

router
  .route('/:id')
  .delete(storageController.deleteStorage)

module.exports = router