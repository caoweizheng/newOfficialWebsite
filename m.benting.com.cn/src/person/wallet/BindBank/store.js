/**
 * const prefixCls = 'style-739791';
 * const images = '/static/images/src/index/Sign';
 * @Author: cwz0525
 * @Date: 2018-07-11 11:28:58
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-13 16:42:06
 * @Path m.benting.com.cn /src/person/Wallet/bindBank/store.js
 */

import { observable } from 'mobx';
import common from '@stores/common';
import G from '@stores/g';

export default class store extends common {
  @observable
  state = this.initState({
    userInfo: G.toJS('userInfo')
  });
  params = {
    query: {
      type: 0
    }
  };
  fetchUserInfo = async () => {
    const res = G.fetchUserInfo();

    this.setState(await res, 'userInfo');
    return res;
  };
}
