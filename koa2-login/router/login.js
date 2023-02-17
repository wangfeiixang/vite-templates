const Router = require("koa-router");
const router = new Router();
router.post("/login", checkLogin);

function checkLogin(ctx) {
  let { username, password } = ctx.request.body;
  let res = username === "admin" && password === "123456";
  let result = {
    code: 0,
    data: res,
    message: res ? "登录成功" : "验证失败，请重新登录",
  };
  return (ctx.response.body = result);
}

module.exports = router;
