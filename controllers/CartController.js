const { cart } = require('../models')

class CartController {
    static async getAll(req, res) {
        try {
            let result = await cart.findAll({
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

            let result = await cart.create({ userId, gameId });

            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { userId, gameId } = req.body;

            let result = await cart.update({ userId, gameId },
                { where: { id } });

            result[0] === 1 ?
                res.status(200).json({
                    message: `Cart id ${id} updated successfully!`
                }) :
                res.status(404).json({
                    message: `Cart id ${id} not updated successfully!`
                })
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;

            let result = await cart.destroy({
                where: { id }
            });

            result === 1 ?
                res.status(200).json({
                    message: `Cart id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Cart id ${id} not deleted successfully!`
                })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = CartController;