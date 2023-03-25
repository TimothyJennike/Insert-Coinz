const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "https://insert-coinz.onrender.com/");
    res.header("Access-Control-Allow-Credentials", "true")
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers","*"
    );
    next();
});

app.use(
    cookieParser(),
    express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

require("./routes/routes.js")(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})



 