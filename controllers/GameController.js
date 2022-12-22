const { game } = require('../models')

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

}

module.exports = GameController;