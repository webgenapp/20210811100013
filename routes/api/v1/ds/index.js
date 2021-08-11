const express = require('express')
const router = express.Router()
const { D } = require('../../../../models')
const { auth } = require('../../../../middlewares/auth')

router.get('/', auth, async function (req, res, next) {
  const ds = await D.findAll()

  res.send(ds)
})

router.get('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const d = await D.findOne({ where: { id } })

  res.send(d)
})

router.post('/', auth, async function (req, res, next) {
  const d = await D.build({
    ...req.body,
  }).save()

  res.status(201)
  res.send(d)
})

router.delete('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  await D.destroy({ where: { id } })

  res.status(204)
  res.send()
})

router.put('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const d = await D.findOne({ where: { id } })

  d.d = req.body.d

  d.save()

  res.send(d)
})

module.exports = router
