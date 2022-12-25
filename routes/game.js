const gameRoute = require('express').Router();
const multer = require('multer')
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'game-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })
const { GameController } = require('../controllers/');

gameRoute.get('/', GameController.getAllGames);
gameRoute.post('/add', upload.single('image'), GameController.add);
gameRoute.get('/add', GameController.addPage);
gameRoute.post('/update/:id', upload.single('image'), GameController.update);
gameRoute.get('/update/:id', GameController.updatePage);
gameRoute.get('/delete/:id', GameController.delete);

//Game with genres
gameRoute.get('/:id/genres', GameController.getGameGenres);

//All Game with all details
gameRoute.get('/details', GameController.getAllGameDetails);

//A Game with all details
gameRoute.get('/details/:id', GameController.getGameDetails);


module.exports = gameRoute;