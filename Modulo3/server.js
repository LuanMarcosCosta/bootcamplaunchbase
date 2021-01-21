const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {

    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/36084152?s=460&u=e440dc38fH4aYeFL7mbP3WEV4Y78X3TMRmAzpmRc&v=4",
        name: "Luãn Costa",
        role: "Estudante, Podcaster, Leitor e Escritor",
        description: "Estudante de dev Web, tenho como Hobies produção de Podcasts e Escrever (esse ano meu livro sai) e ler é um amor que desenvolvi depois do meu 20º livro lido",
        links: [
            { name: "GitHub", url: "https://github.com/LuanMarcosCosta" },
            { name: "Instagram", url: "https://www.instagram.com/luan_costa_21/" },
            { name: "Twitter", url: "https://twitter.com/pensadormeiabok" }
        ]
    }

    return res.render("about", { about: about })
})


server.get("/portfolio", function(req, res) {
    return res.render("portfolio.njk", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video) {
        video.id == id

        if (!video) {
            return res.send("Video Not Found")
        }
        return video
    })

    return res.render("video.njk", { item: video })
})

server.listen(5000, function() {
    console.log("server is running")
})