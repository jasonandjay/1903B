'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 添加支付路由
  router.post('/alipay', controller.alipay.pay);
};
