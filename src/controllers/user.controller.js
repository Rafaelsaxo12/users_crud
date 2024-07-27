const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const results = await User.findAll()
    return res.status(200).json(results)
});

const getOne = catchError(async(req, res) => {
    const result = await User.create()
    return res.status(201).json(result)
})

module.exports = {
    getAll,
    getOne
}