import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // 路由模块
  router.get('/', controller.home.index);

  // 用户模块
  router.get('/user', controller.user.index);
  router.get('/user/userInfo', controller.user.userInfo);

  // 伙伴端
  router.get('/partner', controller.partner.index);
};
