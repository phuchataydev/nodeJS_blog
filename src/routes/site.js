const express = require('express');
const SiteController = require('../app/controllers/SiteController');
const router = express.Router();

router.use('/search', SiteController.search);
router.use('/', SiteController.index);

module.exports = router;
