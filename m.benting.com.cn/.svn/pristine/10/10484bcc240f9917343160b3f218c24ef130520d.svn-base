/**
 * const prefixCls = 'style-554348';
 * const images = '/static/images/src/index/VIP';
 * @Author: cwz0525
 * @Date: 2018-07-09 11:41:58
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-11 09:17:45
 * @Path m.benting.com.cn /src/index/VIP/store.js
 */

import { observable } from 'mobx';
// import Api from '@api';
// import Const from '@const';
// import Utils from '@utils';
import common from '@stores/common';
import G from '@stores/g';

export default class store extends common {
  @observable
  state = this.initState({
    userInfo: G.toJS('userInfo')
  });

  initFetch = {
    update: ['fetchUserInfo']
  };

  fetchUserInfo = async () => {
    const res = G.fetchUserInfo();
    this.setState(await res, 'userInfo');
    return res;
  };
}
