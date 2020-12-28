const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("about")
})




server.listen(5000, function() {
    console.log("server runing")
})