const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send('Welcome to backend of Todo APP!')
})

module.exports = router