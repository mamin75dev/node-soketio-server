import express from "express";
const router = express.Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("xxx:respond with a resource");
});

export default router;
