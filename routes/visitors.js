const express = require('express');
const { getVisitors } = require('../controllers/visitors');

const router = express.Router();

router.route('/').get(getVisitors);

module.exports = router;
