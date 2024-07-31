const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const results = await User.findAll()
    return res.status(200).json(results)
});

const create = catchError(async(req, res) => {
    const result = await User.create(req.body)
    return res.status(201).json(result)
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const results = await User.findByPk(id)
    return res.json(results)
})

const destroy = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.destroy({ where: { id } })
    if (!result) return res.sendStatus(404)
        return res.sendStatus(204)
})

const update = catchError(async(req, res) => {
    const { id } = req.params
    const User = await User.update(
        req.body,
        { where:{ id } ,returning:true }
    )

    if (car[0] === 0) return res.sendStatus(404)

        return res.status(200).json(car[1][0])
})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update

}