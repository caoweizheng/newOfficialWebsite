/**
 * const prefixCls = 'style-141184';
 * const images = '/static/images/src/index/Forgot';
 * @Author: czy0729
 * @Date: 2018-07-04 10:08:18
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 10:11:51
 * @Path m.benting.com.cn /src/index/Forgot/store.js
 */
import common from '@stores/common';
import Api from '@api';
import Utils from '@utils';

export default class Store extends common {
  /* ==================== Action ==================== */
  // 找回
  doFind = async values => {
    await Api.P('do_find_pwd', values);

    Utils.light('重设密码成功');
    Utils.router.back();
  };
}
