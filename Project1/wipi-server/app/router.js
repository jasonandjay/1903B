'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 添加支付路由
  router.post('/alipay', controller.alipay.pay);
  // 保存分片
  router.post('/file/saveChunk', controller.file.saveChunk);
  // 合并分片
  router.post('/file/mergeChunk', controller.file.mergeChunk);
};
