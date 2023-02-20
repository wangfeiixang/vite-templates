// import Router from "../koa-router"
const Router = require("koa-router");
const login = require("./login");
const home = require("./home");
let router = new Router();
router.use(login.routes());
router.use(home.routes());

module.exports = router;
