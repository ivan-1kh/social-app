const { Pool } = require("pg");
const url = require("url");
require("dotenv").config();

if (!process.env.DATABASE_URL) throw new Error("Enviroment variable DATABASE_URL must be set");

const params = url.parse(process.env.DATABASE_URL);
const [user, password] = params.auth.split(":");
const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    max: process.env.MAX_CONNECTION || 2,
    user,
    password,
    ssl: params.hostname !== "localhost",
};

module.exports = new Pool(options);
