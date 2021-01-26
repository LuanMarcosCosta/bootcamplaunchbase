const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("/teacher")
})

routes.get('/teacher', function(req, res) {
    return res.render("teacher/index")
})

routes.get('/members', function(req, res) {
    return res.send("members")
})

module.exports = routes