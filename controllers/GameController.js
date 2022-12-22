const { game, gameGenre, genre } = require('../models')

class GameController {
    static async getAllGames(req, res) {
        try {
            let result = await game.findAll({
                order:[
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
            const { name, image, price } = req.body;
            let result = await game.create({ name, image, price});
            res.json(result);
        } catch (err) {
            res.json(err);
        }
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

}

module.exports = GameController;