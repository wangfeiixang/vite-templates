const Koa = require("koa");
const router = require("./router/router");
const { koaBody } = require("koa-body");
const statics = require("koa-static");
const path = require("path");

let app = new Koa();

app.use(
  koaBody({
    multipart: true,
  })
);
app.use(router.routes());

app.use(statics(path.join(__dirname, "./public")));

app.use(async (ctx) => {
  console.log("404 Not Found");
});

console.log("项目启动http://127.0.0.1:3000");
app.listen(3000);
