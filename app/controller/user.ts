import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = '这个是user的接口';
  }
  public async userInfo() {
    const { ctx } = this;
    ctx.body = '这个是获取用户信息的接口';
  }
}
