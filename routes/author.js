const express = require('express');
const router = express.Router();
const auhtherControllerClass = require('../controllers/author');

const authorController = new auhtherControllerClass()

router.get('/:id', (req, res) => authorController.getAuthorById(req, res));


module.exports = router;