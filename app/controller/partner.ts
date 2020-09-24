import { Controller } from 'egg';

export default class PartnerController extends Controller {
  async index() {
    await this.ctx.render('index');
  }
}
