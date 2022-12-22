const { gameProfile, game } = require("../models")

module.exports = class gameProfileController {
    static getGameProfiles(req, res) {
        gameProfile.findAll({ order: [["id", "asc"]], include: [game] })
            .then((gameProfiles) => {
                // res.render('gameProfiles', { gameProfiles })
                res.json(gameProfiles)
            })
            .catch((err) => {
                res.json(err)
            })
    }

    static createPage(req, res) {
        //res.render('gameProfiles/add.ejs')
    }

    static create(req, res) {
        const { release_date, developer, publisher, desc, gameId } = req.body
        gameProfile.create({ release_date, developer, publisher, desc, gameId })
            .then(result => {
                res.redirect('/game-profiles')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        const id = +req.params.id
        gameProfile.destroy({ where: { id } })
            .then(result => {
                res.redirect('/game-profiles')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updatePage(req, res) {
        const id = +req.params.id
        gameProfile.findByPk(id)
            .then((gameProfile) => {
                //res.render('gameProfiles/update.ejs', { gameProfile })
            })
            .catch((err) => {
                res.json(err)
            })
    }

    static update(req, res) {
        const id = +req.params.id
        const { release_date, developer, publisher, desc, gameId } = req.body
        gameProfile.update({ release_date, developer, publisher, desc, gameId }, {
            where: { id }
        })
            .then(result => {
                res.redirect('/game-profiles')
            })
            .catch(err => {
                res.send(err)
            })
    }
}