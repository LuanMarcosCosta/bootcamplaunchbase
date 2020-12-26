const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("about.njk")
})


server.get("/portfolio", function(req, res) {
    return res.render("portfolio.njk")
})

server.listen(5000, function() {
    console.log("server is running")
})