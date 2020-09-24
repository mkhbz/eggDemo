// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/Login';
import ExportPartner from '../../../app/controller/partner';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    partner: ExportPartner;
    user: ExportUser;
  }
}
