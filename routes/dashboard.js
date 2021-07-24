// DASHBOARD ROUTER
const router = require('express').Router();
const ctrl = require("../controllers");

router.get('/dashboard', ctrl.dashboard.index);

module.exports = router;