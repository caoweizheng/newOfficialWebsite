/**
 * const prefixCls = 'style-126004';
 * const images = '/static/images/src/index/Login';
 * @Author: czy0729
 * @Date: 2018-07-02 10:28:29
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 12:32:20
 * @Path m.benting.com.cn /src/index/Login/store.js
 */
import common from '@stores/common';
import Utils from '@utils';
import G from '@stores/g';
import { lsKey } from './ds';

export default class Store extends common {
  /* ==================== Action ==================== */
  doLogin = async values => {
    await G.doLoginByPwd(values);

    Utils.light('登录成功');
    Utils.lsSet(lsKey, {
      account: values.account,
      pwd: values.pwd
    });

    setTimeout(() => {
      // 若回调跳转方法返回false，跳到个人中心
      if (!G.doJump()) {
        // Utils.router.push('/person');
        Utils.router.push('/');
      }
    }, 200);
  };
}
