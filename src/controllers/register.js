const dbConnection = require("../db/dbconnection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const usersValidation = require("../db/validation/users");

module.exports = (req, res) => {
    dbConnection.query(
        `SELECT id FROM users WHERE email=$1;`,
        [req.body.email.toLowerCase()],
        (errorEmail, resultEmail) => {
            if (resultEmail.rows[0]) {
                res.status(400);
                res.end();
                return;
            }

            if (
                !usersValidation.firstName.test(req.body.firstName) ||
                !usersValidation.lastName.test(req.body.lastName) ||
                !usersValidation.email.test(req.body.email) ||
                !usersValidation.password.test(req.body.password)
            ) {
                res.status(400);
                res.end();
                return;
            }

            bcrypt.hash(req.body.password, 10, (err, hashed) => {
                if (err) {
                    res.status(400);
                    res.end();
                } else {
                    dbConnection.query(
                        `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, first_name, last_name;`,
                        [
                            req.body.firstName.charAt(0).toUpperCase() + req.body.firstName.slice(1),
                            req.body.lastName.charAt(0).toUpperCase() + req.body.lastName.slice(1),
                            req.body.email.toLowerCase(),
                            hashed,
                        ],
                        (error, result) => {
                            if (error) {
                                res.status(400);
                                res.end();
                            } else {
                                jwt.sign(
                                    {
                                        id: result.rows[0].id,
                                        firstName: result.rows[0].first_name,
                                        lastName: result.rows[0].last_name,
                                    },
                                    process.env.SECRET,
                                    (x, token) => {
                                        res.send(token);
                                    }
                                );
                            }
                        }
                    );
                }
            });
        }
    );
};
