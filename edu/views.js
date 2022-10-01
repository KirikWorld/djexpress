//write views here
const path = require("path");
const templates = path.join(__dirname, "/templates");

function index(req, res){
    res.sendFile(path.join(templates, "/index.html"));
}

//exports
module.exports = {index}
