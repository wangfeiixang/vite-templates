const Koa = require("koa");
const router = require("./router/router");
const { koaBody } = require("koa-body");

var app = new Koa();

app.use(koaBody());
app.use(router.routes());

app.use(async (ctx) => {
  console.log("404 Not Found");
});

console.log("项目启动http://127.0.0.1:3000");
app.listen(3000);
