const Storage = require(`${__dirname}/../models/storageModel`)
const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')

exports.createStorage = catchAsync(async (req, res, next) => {
  const newStorage = await Storage.create(req.body)

  res.status(201).json({
    status: 'success',
    data: {
      storage: newStorage
    }
  })
})

exports.getAllStorages = catchAsync(async (req, res, next) => {
  const storages = await Storage.find()

  if (!storages) {
    return next(new AppError('No storages', 404))
  }

  res.status(201).json({
    status: 'success',
    data: {
      storages
    }
  })
})

exports.deleteStorage = catchAsync(async (req, res, next) => {
  const storage = await Storage.findByIdAndDelete(req.params.id)

  if (!storage) {
    return next(new AppError('No storage with that ID', 404))
  }

  res.status(204).json({
    status: 'success',
    data: null
  })
})