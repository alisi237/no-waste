const Grocerie = require(`${__dirname}/../models/grocerieModel`)
// const APIFeatures = require(`${__dirname}/../utils/apiFeatures`)
const AppError = require('./../utils/AppError')
const catchAsync = require('./../utils/catchAsync')

exports.createGrocerie = catchAsync(async (req, res, next) => {
  const newGrocerie = await Grocerie.create(req.body)

  res.status(201).json({
    status: 'success',
    data: {
      grocerie: newGrocerie
    }
  })
})

exports.deleteGrocerie = catchAsync(async (req, res, next) => {
  const grocerie = await Grocerie.findByIdAndDelete(req.params.id)

  if (!grocerie) {
    return next(new AppError('No grocerie with that ID', 404))
  }

  res.status(204).json({
    status: 'success',
    data: null
  })
})