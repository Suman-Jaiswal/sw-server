var express = require("express"),
    router = express.Router(),
    verifyToken = require("../middlewares/authJWT"),
    {
        signup,
        signin
    } = require("../controllers/auth.controller.js");

router.post("/register", signup, function (req, res) {

});

router.post("/login", signin, function (req, res) {

});

router.get("/api", verifyToken, function (req, res) {
    user = req.user;
    if (!user) {
        res.status(403)
            .send({
                message: "Invalid JWT token"
            });
    }
    else {
        res.status(200)
            .send({
                message: "Congratulations! but there is no hidden content"
            });
    }

});


module.exports = router;
