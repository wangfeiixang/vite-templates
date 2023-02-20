const Router = require("koa-router");
const fs = require("fs");
let path = require("path");
const router = new Router();
router.post("/upload", upload);

function upload(ctx) {
  // 获取上传文件
  const file = ctx.request.files.file;
  // 创建可读流
  const reader = fs.createReadStream(file.filepath);
  let fileUrl = process.cwd();
  let imgUrl = new Date().getTime() + "." + file.mimetype.split("/")[1];
  let filePath = path.join(fileUrl, "public/upload/") + imgUrl;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  let result = {
    code: 0,
    data: {
      url: "http://" + ctx.request.host + "/upload/" + imgUrl,
      name: imgUrl,
    },
    message: "成功",
  };
  return (ctx.response.body = result);
}

module.exports = router;
