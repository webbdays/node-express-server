
// let routes_handlers = require("./routes_handlers");

let express = require("express");

let express_app = express()

let DEFAULT_PORT = "80"
express_app.listen(DEFAULT_PORT)
console.log("I am node express server")


// handlers
routes_handlers = {
index_page_handler : (_, res)=>{
    res.send("Thanks for reaching out to node express server")
}
}

express_app.get('/', routes_handlers.index_page_handler)