const { genre } = require('../models')

class GenreController {
    static async getAllGenres(req, res) {
        try {
            let result = await genre.findAll({
                order:[
                    ['id', 'asc']
                ]
            });
            // res.json(result);
            res.render('genre.ejs', {genres : result});
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            const { name } = req.body;
            let result = await genre.create({ name });
            res.redirect('/genre');
            // res.json(result);
        } catch (err) {
            res.json(err);
        }
    }

    static async addPage(req, res) {
        res.render('addGenre.ejs');
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await genre.destroy({
                where: { id }
            });
            // res.json(result);
            res.redirect('/genre');
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

            // res.json(result);
            // res.json('genre.ejs', { genres : result });
            res.redirect('/genre')

        } catch (err) {
            res.json(err);
        }
    }

    static async updatePage(req, res) {
        try {
            const id = +req.params.id;

            let result = await genre.findByPk(id);

            res.render('updateGenre.ejs', { genre : result });

        } catch (err) {
            res.json(err);
        }
    }

}

module.exports = GenreController;