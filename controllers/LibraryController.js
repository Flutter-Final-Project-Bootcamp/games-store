const { library } = require('../models')

class LibraryController {
    static async getAll(req, res) {
        try {
            let result = await library.findAll({
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
            const { userId, gameId } = req.body;

            let result = await library.create({ userId, gameId });

            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { userId, gameId } = req.body;

            let result = await library.update({ userId, gameId },
                { where: { id } });

            result[0] === 1 ?
                res.status(200).json({
                    message: `Library id ${id} updated successfully!`
                }) :
                res.status(404).json({
                    message: `Library id ${id} not updated successfully!`
                })
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;

            let result = await library.destroy({
                where: { id }
            });

            result === 1 ?
                res.status(200).json({
                    message: `Library id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Library id ${id} not deleted successfully!`
                })
        } catch (err) {
            res.status(500).json(err)
        }
    }


    static async getByIdUser(req, res) {
        try {
            const id = +req.userData.id

            let result = await library.findAll({ where: id, include: { all: true } })

            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = LibraryController;