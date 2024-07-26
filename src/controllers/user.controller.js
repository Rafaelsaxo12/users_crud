const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const results = await User.findAll()
    return res.status(200).json(results)
});

module.exports = {
    getAll
}