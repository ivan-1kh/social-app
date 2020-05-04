const { Router } = require("express");
const router = Router();
const path = require("path");

const error = require("./error.js");

router.get("/api/ping", require("../middlewares/verifyToken"), (req, res) => {
    res.send("Pong");
});
router.get("/api/usersvalidation", require("./validation").usersValidation);
router.post("/api/authenticate", require("./authenticate"));
router.post("/api/register", require("./register"));
router.get("/api/loguser", require("./loguser"));

//For React:
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "client", "build", "index.html"));
});

router.use(error.client);
router.use(error.server);

module.exports = router;
