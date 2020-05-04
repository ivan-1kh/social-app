const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const controllers = require("./controllers/index");

const app = express();

//For React:
app.use(express.static(path.join(__dirname, "..", "client", "build")));

require("dotenv").config();

app.disable("x-powered-by");
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.options("*", cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, append,delete,entries,foreach,get,has,keys,set,values,Authorization"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");

    next();
});

app.use(controllers);

module.exports = app;
