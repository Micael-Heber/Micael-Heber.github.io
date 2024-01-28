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



    server.get("/", function (req, res) {
    const about = {
    avatar_url: "image.jpg",
    name: "Micael Heber",
    role: "Qa Student",
    description: 'Hardware maintenance technician and Qa tester student',
    links: [

    {name: "Linkedin", url: "https://www.linkedin.com/in/micael-h%C3%A9ber-8529a5214/" },
    {name: "Youtube", url: "https://www.youtube.com/@vidasemfim654/videos" },
    {name: "Github", url: "https://github.com/Micael-Heber" },

    ]
    }

    return res.render("about", { about })
    })

    server.get("/portfolio", function (req, res) {

    return res.render("portfolio", { items: videos })

    })
    server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video) {
        return video.id == id
    })

    if (!video) {
    return res.send("video not found!")
    }

    return res.render("video", { item: video })
    })

    server.listen(5000, function(){
    console.log("server is running")
    })