const express = require('express');
const router = express.Router();

const komikController = require('../controller/komikController');
const userController = require('../controller/userController');
const genreController = require('../controller/genreController');
const authMiddleware = require('../middleware/authMiddleware');

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Komik routes
//publik
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);

// Protected routes
router.post('/komik', authMiddleware, komikController.createKomik);
router.put('/komik/:id', authMiddleware, komikController.updateKomik);
router.delete('/komik/:id', authMiddleware, komikController.deleteKomik);

// Genre routes
//public
router.get('/genre', genreController.getAllGenre);
router.get('/genre/:id', genreController.getGenreById);

// Protected routes
router.post('/genre', authMiddleware, genreController.createGenre);
router.put('/genre/:id', authMiddleware, genreController.updateGenre);
router.delete('/genre/:id', authMiddleware, genreController.deleteGenre);

module.exports = router;