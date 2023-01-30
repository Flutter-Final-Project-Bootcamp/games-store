const { genre } = require('../models')

class GenreController {
    static async getAllGenres(req, res) {
        try {
            let result = await genre.findAll({
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
            const { name } = req.body;
            let result = await genre.create({ name });
            res.json(result);
        } catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await genre.destroy({
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

            let result = await genre.update({ name },
                { where: { id } });

            res.json(result);

        } catch (err) {
            res.json(err);
        }
    }

}

module.exports = GenreController;