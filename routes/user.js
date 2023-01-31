const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')
const { auth } = require('../middlewares/auth')
const upload = require('../middlewares/multer')

userRoute.get('/', auth, UserController.getAll)
userRoute.post('/', UserController.create)
userRoute.post('/login', UserController.login)
userRoute.put('/:id', auth, upload('user').single('image'), UserController.update)
userRoute.delete('/:id', auth, UserController.delete)
userRoute.get('/user/:id', auth, UserController.getById)

userRoute.get('/user', auth, UserController.getByIdUser)
userRoute.put('/user/update', auth, upload('user').single('image'), UserController.updateUser)

module.exports = userRoute