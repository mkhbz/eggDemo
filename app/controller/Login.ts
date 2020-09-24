import { Controller } from 'egg';

export default class LoginController extends Controller {
  async index() {
    await this.ctx.render('index');
  }
}
