const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')
const { auth, admin } = require('../middlewares/auth')
const upload = require('../middlewares/multer')

userRoute.get('/', admin, UserController.getAll)
userRoute.post('/', UserController.create)
userRoute.post('/login', UserController.login)
userRoute.put('/:id', admin, upload('user').single('image'), UserController.update)
userRoute.delete('/:id', admin, UserController.delete)
userRoute.get('/user/:id', admin, UserController.getById)

userRoute.get('/user', auth, UserController.getByIdUser)
userRoute.put('/user/update', auth, upload('user').single('image'), UserController.updateUser)

module.exports = userRoute