const { game, gameGenre, genre, gameProfile } = require('../models')

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
            const { name, image, price, release_date, developer, publisher, desc } = req.body;
            let addGame = await game.create({ name, image, price });
            let addGameProfile = await gameProfile.create({ release_date, developer, publisher, desc, gameId: addGame.id })

            res.json(addGameProfile);
        } catch (err) {
            res.json(err);
        }
    }

    static async addPage(req, res) {
        res.render('addGame.ejs');
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await game.destroy({
                where: { id }
            });
            res.json(result);
        } catch (err) {
            res.json(err)
        }
    }

    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, image, price } = req.body;

            let result = await game.update({ name, image, price },
                { where: { id } });

            res.json(result);

        } catch (err) {
            res.json(err);
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
        } catch {

        }
    }

    static async getAllGameDetails(req, res) {
        try {
            const result = await game.findAll({ order: [["id", "asc"]], include: [gameProfile, genre] })
            res.json(result)
        } catch (err) {
            res.json(err);
        }
    }

    static async getGameDetails(req, res) {
        try {
            const id = +req.params.id
            const result = await game.findOne({ where: { id }, order: [["id", "asc"]], include: [gameProfile, genre] })
            res.json(result)
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = GameController;