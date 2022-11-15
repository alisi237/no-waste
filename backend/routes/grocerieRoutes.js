const express = require('express')
const grocerieController = require('./../controllers/grocerieController.js')
const authController = require('./../controllers/authController')

const router = express.Router()

router
  .route('/')
  .get(grocerieController.getAllGroceries)
  .post(grocerieController.createGrocerie)

router
  .route('/:id')
  .delete(grocerieController.deleteGrocerie)
  .patch(grocerieController.updateGrocerie)
// .get(grocerieController.getGrocerie)

module.exports = router