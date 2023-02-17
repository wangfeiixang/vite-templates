// import Router from "../koa-router"
const Router = require("koa-router");
const login = require("./login");
let router = new Router();
router.use(login.routes());

module.exports = router;
