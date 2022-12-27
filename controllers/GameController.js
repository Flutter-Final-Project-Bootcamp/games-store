const { game, gameGenre, genre, gameProfile } = require('../models')
const fs = require('fs')
class GameController {
    static async getAllGames(req, res) {
        try {
            let result = await game.findAll({
                order: [
                    ['id', 'asc']
                ]
            });
            res.json(result);
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            const { name, price, release_date, developer, publisher, desc, genres } = req.body;
            const addGame = await game.create({ name, image: req.file.filename, price });
            await gameProfile.create({ release_date, developer, publisher, desc, gameId: addGame.id });
            for (const genre of genres) {
                await gameGenre.create({ gameId: addGame.id, genreId: genre })
            }
            const result = await game.findOne({
                where: { id: addGame.id },
                include: [gameProfile, genre]
            });
            // res.json(result);
            res.redirect('/game/details');
        } catch (err) {
            res.json(err);
        }
    }

    static async addPage(req, res) {
        const genres = await genre.findAll({ order: [['id', 'asc']] })
        res.render('addGame.ejs', { genres })
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let oldImage = await game.findOne({ where: { id } })
            let file = './public/uploads/' + oldImage.image
            let result = await game.destroy({
                where: { id }
            });
            await gameGenre.destroy({ where: { gameId: id } })
            await gameProfile.destroy({ where: { gameId: id } })
            fs.unlink(file, (err) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        return;
                    }
                    throw err;
                }
            })
            // res.json(result);
            res.redirect('/game/details/');
        } catch (err) {
            res.json(err)
        }
    }

    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, price, release_date, developer, publisher, desc, genres } = req.body;
            if (req.file) {
                let oldImage = await game.findOne({ where: { id } })
                let file = './public/uploads/' + oldImage.image
                await game.update({ name, image: req.file.filename, price },
                    { where: { id } });
                fs.unlink(file, (err) => {
                    if (err) {
                        if (err.code === 'ENOENT') {
                            return;
                        }
                        throw err;
                    }
                })
            } else {
                await game.update({ name, price },
                    { where: { id } });
            }
            await gameProfile.update({ release_date, developer, publisher, desc },
                { where: { gameId: id } });
            await gameGenre.destroy({ where: { gameId: id } });
            for (const genre of genres) {
                await gameGenre.create({ gameId: id, genreId: genre })
            }
            const result = await game.findOne({
                where: { id },
                include: [gameProfile, genre]
            });
            // res.json(result);
            res.redirect('/game/details/' + id);

        } catch (err) {
            res.json(err);
        }
    }

    static async updatePage(req, res) {
        try {
            const id = +req.params.id
            const genres = await genre.findAll({ order: [['id', 'asc']] })
            let upGame = await game.findOne({
                where: { id },
                include: [gameProfile, genre]
            })
            res.render('updateGame.ejs', { game: upGame, genres })
        } catch (err) {
            res.json(err)
        }
    }

    static async getGameGenres(req, res) {
        try {
            const id = Number(req.params.id);

            let result = await gameGenre.findAll({
                where: {
                    gameId: id
                },
                include: [game, genre]
            });


            let genres = result.map(el => {
                return el.genre.dataValues
            });

            let resultGameGenres = {
                ...result[0].game.dataValues,
                genres
            }

            // console.log(resultGameGenres)

            res.json(resultGameGenres);
            // res.json(result);
        } catch (err) {
            res.json(err)
        }
    }

    static async getAllGameDetails(req, res) {
        try {
            const result = await game.findAll({
                order: [["id", "asc"]],
                include: [gameProfile, genre]
            })

            // let resultProfile = await gameProfile.findAll();

            // res.json(result)
            res.render('games.ejs', { games: result })
        } catch (err) {
            res.json(err);
        }
    }

    static async getGameDetails(req, res) {
        try {
            const id = +req.params.id

            const result = await game.findOne({
                where: { id },
                include: [gameProfile, genre]
            });

            // res.json(result)
            res.render('gameProfile.ejs', { game: result })
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = GameController;