import { EggPlugin } from 'egg';

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
const plugin: EggPlugin = {
  static: true,
  // mongoose
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },

};
export default plugin;
