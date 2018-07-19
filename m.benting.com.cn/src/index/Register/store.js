/**
 * const prefixCls = 'style-469698';
 * const images = '/static/images/src/index/Register';
 * @Author: czy0729
 * @Date: 2018-07-03 17:11:21
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 09:55:57
 * @Path m.benting.com.cn /src/index/Register/store.js
 */
import common from '@stores/common';
import Api from '@api';
import Utils from '@utils';
import G from '@stores/g';

export default class Store extends common {
  /* ==================== Action ==================== */
  // 注册
  doRegister = async values => {
    await Api.P('do_user_register', values);

    Utils.light('注册成功');

    setTimeout(() => {
      this.doAutoLogin(values);
    }, 200);
  };

  // 自动登录
  doAutoLogin = async values => {
    await G.doLoginByPwd({
      account: values.mobile,
      pwd: values.pwd
    });

    // Utils.router.push('/person/user/basic');
    Utils.router.push('/');
  };
}
