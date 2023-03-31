var https = require("https")
var express = require("express")
var fs = require("fs")
var app = express()

app.use(express.json())

var httpsOptions = {
  key: fs.readFileSync("./ssl/localhost.key"),
  cert: fs.readFileSync("./ssl/localhost.crt"),
  // ca: [fs.readFileSync("./ssl/localhost.chain.pem")]
}

app.get("/", async function(request, response) {
  response.end("Welcome to my API on HTTPS")
})

https
  .createServer(httpsOptions, app)
  .listen(443, () => {
    console.log("> Server listening on https://localhost:443")
  })

module.exports = app
