const { genre } = require('../models')

class GenreController {
    static async getAllGenres(req, res) {
        try {
            let result = await genre.findAll({
                order: [
                    ['id', 'asc']
                ]
            });

            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async add(req, res) {
        try {
            const { name } = req.body;

            let result = await genre.create({ name });

            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name } = req.body;

            let result = await genre.update({ name },
                { where: { id } });

            result[0] === 1 ?
                res.status(200).json({
                    message: `Genre id ${id} updated successfully!`
                }) :
                res.status(404).json({
                    message: `Genre id ${id} not updated successfully!`
                })
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;

            let result = await genre.destroy({
                where: { id }
            });

            result === 1 ?
                res.status(200).json({
                    message: `Genre id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Genre id ${id} not deleted successfully!`
                })
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async getGenreById(req, res) {
        try {
            const id = +req.params.id

            let result = await genre.findByPk(id, { include: { all: true } })

            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = GenreController;