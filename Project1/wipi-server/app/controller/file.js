'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const saveDir = path.resolve(__dirname, '../public');

class FileController extends Controller {
  // 存储大文件的分片
  async saveChunk(){
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    console.log('stream...', stream);
    try{
         // 分片存储的文件夹
        const chunkDir = path.join(saveDir, `/${stream.fieldname}`)
        if (!fs.existsSync(chunkDir)) {
            fs.mkdirSync(chunkDir);
        }
        // 文件存储路径
        const chunkFile = fs.createWriteStream(path.join(chunkDir, `/${stream.fieldname}_${stream.fields.index}`));
        stream.pipe(chunkFile);
        ctx.body = {'msg': '分片存储成功'}
    }catch(e){
        console.log('e...', e);
        ctx.body = {'msg': '分片存储失败'}
    }
  }

  // 合并分片文件
  async mergeChunk(){
    const { ctx } = this;
    const {total, chunkname, filename} = ctx.request.body;
    let index = 1;
    try{
        fs.writeFileSync(path.join(saveDir, `/${filename}`), '');
        while(total>=index){
            fs.appendFileSync(path.join(saveDir, `/${filename}`), fs.readFileSync(path.join(saveDir, `/${chunkname}/${chunkname}_${index}`)));
            index++;
        } 
        ctx.body = {'msg': '分片合并成功'};
    }catch(e){
        console.log('e...', e);
        ctx.body = {'msg': '分片合并失败'};
    }
  }
}

module.exports = FileController;
