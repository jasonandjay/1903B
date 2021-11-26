/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1637634255013_4913';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      // domainWhiteList: ['http://localhost:8000'],
      csrf: {
        enable: false,
      }
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    multipart: {
      whitelist: ['*', '.js', '.ts', '.png', '.jpg', '.har', '.mp4']
      // mode: 'file'
    }
  };



  return {
    ...config,
    ...userConfig,
  };
};
