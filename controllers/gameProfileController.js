const { gameProfile, game } = require("../models")

module.exports = class gameProfileController {
    static async getGameProfiles(req, res) {
        try {
            let result = await gameProfile.findAll({ order: [["id", "asc"]], include: [game] })

            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }

    static async create(req, res) {
        try {
            const { release_date, developer, publisher, desc, gameId } = req.body

            let result = await gameProfile.create({ release_date, developer, publisher, desc, gameId })

            res.json(result)
        } catch (err) {
            res.json(err)

        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id

            let result = await gameProfile.destroy({ where: { id } })

            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id
            const { release_date, developer, publisher, desc, gameId } = req.body

            let result = await gameProfile.update({ release_date, developer, publisher, desc, gameId }, {
                where: { id }
            })

            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }
}