const express = require('express')
const router = express.Router()

//beatmango home page
router.get('/', function (req, res) {res.render('pages/index')})

//lyri home page
router.get('/lyri', function (req, res) {res.render('pages/lyri')})

module.exports = router