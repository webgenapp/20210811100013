const express = require('express')
const router = express.Router()
const { B } = require('../../../../models')
const { auth } = require('../../../../middlewares/auth')

router.get('/', auth, async function (req, res, next) {
  const bs = await B.findAll()

  res.send(bs)
})

router.get('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const b = await B.findOne({ where: { id } })

  res.send(b)
})

router.post('/', auth, async function (req, res, next) {
  const b = await B.build({
    ...req.body,
  }).save()

  res.status(201)
  res.send(b)
})

router.delete('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  await B.destroy({ where: { id } })

  res.status(204)
  res.send()
})

router.put('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const b = await B.findOne({ where: { id } })

  b.b = req.body.b

  b.save()

  res.send(b)
})

module.exports = router
