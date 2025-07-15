const express = require('express');
const router = express.Router()

const {claimPoints,history } = require('../controllers/rewardController');

router.route('/claim/:id').post(claimPoints)
router.route('/history').get(history)

module.exports = router
