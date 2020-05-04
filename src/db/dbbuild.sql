BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (first_name, last_name, email, password) VALUES
    ('Ivan', 'Korey', 'korean@gmail.com', '$2b$10$83ShiiJEgt3tl8DHGw4vVuWEtkZivHah6enR6/7c3DmiPJr1bQJP6'),/*Korea*/
    ('Rabea', 'Diaz', 'rdiaz@gmail.com', '$2b$10$qI9qdK4YXg5ij.mZ/nhqVe1xOqb72raHYbzBrqTozGeeeHtnHFnue'),/*Columbia*/
    ('Yousef', 'Russo', 'yourusso@gmail.com', '$2b$10$kdlzaXJPZDJuTlOvdUnTc.0zCdPDu5ZfN15WrGDLgRC/nNGYEh8/6'),/*USA*/
    ('Aysam', 'Obama', 'Aybama@gmail.com', '$2b$10$ylDi9k9vSt2DYNLxPzxxTeZPmLB.d32F0q6SeMUFrj1gtfByEvjmG'),/*Mexico*/
    ('Francis', 'Eisenberg', 'frantheman@gmail.com', '$2b$10$cKHJtDYi.REmJJnvFp5IOe.d4As1.LaaBdt9xdcIh0R88CIujjW0.');/*Greece*/

COMMIT;
