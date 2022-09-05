require('dotenv').config()
let route_handlers = require("./routes/webpage-routes");

let express = require("express");

let express_app = express()

let DEFAULT_PORT = process.env.DEFAULT_PORT
console.log(process.mainModule.children)
express_app.listen(DEFAULT_PORT)
console.log("I am a node express server here.");

express_app.get('/', route_handlers.index_page_handler )
express_app.get('/home', route_handlers.home_page_handler)

