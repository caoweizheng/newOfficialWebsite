/**
 * const prefixCls = 'style-245094';
 * const images = '/static/images/src/index/Sign';
 * @Author: cwz0525
 * @Date: 2018-07-11 11:28:58
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-12 16:32:33
 * @Path m.benting.com.cn /src/person/Wallet/Index/store.js
 */

import { observable } from 'mobx';
import common from '@stores/common';
import G from '@stores/g';

export default class store extends common {
  @observable
  state = this.initState({
    userInfo: G.toJS('userInfo'),
    walletInfo: '0.00'
  });
  params = {
    query: {
      type: 0
    }
  };
  initFetch = {
    update: ['fetchUserInfo'],
    every: ['fetchWalletInfo']
  };

  fetchUserInfo = async () => {
    const res = G.fetchUserInfo();

    this.setState(await res, 'userInfo');
    return res;
  };

  fetchWalletInfo = async () => {
    const { query } = this.params;

    return this.fetchThenSetState('get_wallet_info', 'walletInfo', query);
  };
}
