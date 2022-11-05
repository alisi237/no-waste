const express = require('express')
const grocerieController = require('./../controllers/grocerieController.js')
const authController = require('./../controllers/authController')

const router = express.Router()

router
  .route('/')
  // .get(authController.protect, grocerieController.getAllGroceries)
  .post(grocerieController.createGrocerie)

router
  .route('/:id')
  .delete(grocerieController.deleteGrocerie)
// .get(grocerieController.getGrocerie)
// .patch(grocerieController.updateGrocerie)

module.exports = router