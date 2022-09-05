function index_page_handler(_, res){
    res.send("Thanks for reaching out to node express server")
}
function home_page_handler(_,res){
    res.sendFile(__dirname +"/static/home.html")
}

module.exports = {
    index_page_handler,
    home_page_handler
}


