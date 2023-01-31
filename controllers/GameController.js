const { game, gameGenre, genre, gameProfile } = require('../models')
const fs = require('fs')
class GameController {
    static async getAllGames(req, res) {
        try {
            let result = await game.findAll({
                include: { all: true },
                order: [['id', 'asc']]
            });

            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
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
            let result = await game.findOne({
                where: { id: addGame.id },
                include: [gameProfile, genre]
            });

            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, price, release_date, developer, publisher, desc, genres } = req.body;

            let result = [0]
            if (req.file) {
                let oldImage = await game.findByPk(id)
                let file = './public/uploads/' + oldImage.image

                result = await game.update({ name, image: req.file.filename, price },
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
                result = await game.update({ name, price },
                    { where: { id } });
            }
            await gameProfile.update({ release_date, developer, publisher, desc },
                { where: { gameId: id } });
            await gameGenre.destroy({ where: { gameId: id } });
            for (const genre of genres) {
                await gameGenre.create({ gameId: id, genreId: genre })
            }

            result[0] === 1 ?
                res.status(200).json({
                    message: `Game id ${id} updated successfully!`
                }) :
                res.status(404).json({
                    message: `Game id ${id} not updated successfully!`
                })
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let oldImage = await game.findByPk(id)
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

            result === 1 ?
                res.status(200).json({
                    message: `Game id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Game id ${id} not deleted successfully!`
                })
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async getGameById(req, res) {
        try {
            const id = +req.params.id

            let result = await game.findByPk(id, { include: { all: true } })

            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err);
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

            res.json(resultGameGenres);
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = GameController;