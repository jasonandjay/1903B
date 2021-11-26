const http = require('http'); //用来启服务
const fs = require('fs'); //用来读取文件
const path = require('path');

//开启服务
http.createServer(function (req, res) {
    var url = req.url;
    var filePath = path.resolve(__dirname, `./images${url}`);
    console.log('url...', url, filePath);
    if (url === '/favicon.ico'){
        return;
    }
    fs.readFile(filePath, function (err, data) {
        console.log('data...', data, err);
        if (!err) {
            res.writeHeader(200, {
                // 'content-type': 'image/jpeg"',
                // 'Content-Type': 'application/octet-stream',
                // 'Content-Disposition': `attachment;filename=${url.slice(1)}`
            });
            res.write(data);
            res.end();
        } else {
            // res.writeHeader(200, {
            //     'content-type': 'text/html;charset="utf-8"'
            // });
            // res.write(data); //将index.html显示在客户端
            // res.end();
        }
    })
}).listen(8888); //端口号
console.log('服务器开启成功,监听端口8888');