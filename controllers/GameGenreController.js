const { gameGenre, game, genre } = require('../models')

class GameGenreController {
    static async getAll(req, res) {
        try {
            let result = await gameGenre.findAll({
                order:[
                    ['id', 'asc']
                ],
                include:[game, genre]
            });
            res.json(result);
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            const { gameId, genreId } = req.body;
            let result = await gameGenre.create({ 
                gameId: +gameId, 
                genreId: +genreId });
            res.json(result);
        } catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await gameGenre.destroy({
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
            const { name } = req.body;

            let result = await gameGenre.update({ name },
                { where: { id } });

            res.json(result);

        } catch (err) {
            res.json(err);
        }
    }

}

module.exports = GameGenreController;