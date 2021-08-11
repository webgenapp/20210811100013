const express = require('express')
const router = express.Router()
const { C } = require('../../../../models')
const { auth } = require('../../../../middlewares/auth')

router.get('/', auth, async function (req, res, next) {
  const cs = await C.findAll()

  res.send(cs)
})

router.get('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const c = await C.findOne({ where: { id } })

  res.send(c)
})

router.post('/', auth, async function (req, res, next) {
  const c = await C.build({
    ...req.body,
  }).save()

  res.status(201)
  res.send(c)
})

router.delete('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  await C.destroy({ where: { id } })

  res.status(204)
  res.send()
})

router.put('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const c = await C.findOne({ where: { id } })

  c.c = req.body.c

  c.save()

  res.send(c)
})

module.exports = router
