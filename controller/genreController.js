const db = require('../models');

async function getAllGenre(req, res) {
    try {
        const genre = await db.Genre.findAll();
        res.status(200).json(genre);
    } catch (err) {
        console.error('Error fetching genre:', err.message);
        res.status(500).json({ error: 'Failed to fetch genre' });
    }
}

async function getGenreById(req, res) {
    const { id } = req.params;
    try {
        const genre = await db.Genre.findByPk(id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        res.status(200).json(genre);
    } catch (err) {
        console.error('Error fetching genre by id:', err.message);
        res.status(500).json({ error: 'Failed to fetch genre by id' });
    }
}

async function createGenre(req, res) {
    const { nama } = req.body;
    try {
        if (!nama) {
            return res.status(400).json({ message: 'Nama genre wajib diisi.' });
        }
        const newGenre = await db.Genre.create({ nama });
        res.status(201).json(newGenre);
    } catch (err) {
        console.error('Error creating genre:', err.message);
        res.status(500).json({ error: 'Failed to create genre' });
    }
}

async function updateGenre(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    try {
        const genre = await db.Genre.findByPk(id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        genre.nama = nama;
        await genre.save();
        res.status(200).json(genre);
    } catch (err) {
        console.error('Error updating genre:', err.message);
        res.status(500).json({ error: 'Failed to update genre' });
    }
}

async function deleteGenre(req, res) {
    const { id } = req.params;
    try {
        const genre = await db.Genre.findByPk(id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        await genre.destroy();
        res.status(200).json({ message: 'Genre deleted successfully' });
    } catch (err) {
        console.error('Error deleting genre:', err.message);
        res.status(500).json({ error: 'Failed to delete genre' });
    }
}

module.exports = {
    getAllGenre,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
};