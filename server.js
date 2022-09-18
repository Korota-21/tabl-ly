const http = require('http')
const PORT = process.env.PORT || 5000 // for heroku server
const express = require("express");
const app = express();

const server = http.createServer(app)

app.use(express.static('public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', function(req, res) {
    res.render('index');
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})