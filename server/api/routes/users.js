import { Router } from 'express'

const router = Router()

const users = [
  {id: 1, name: 'Davi Rolim' },
  {id: 2, name: 'Johnnys Martins' },
]

router.get('/users', function (req, res, next) {
  res.json(users)
})

router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (!id || id > users.length) {
    res.sendStatus(404)
    return;
  }
  let user = users.find(user => user.id === id)
  res.json({ user : user });
})

export default router