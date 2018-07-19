/**
 * const prefixCls = 'style-554348';
 * const images = '/static/images/src/person/Index';
 * @Author: cwz0525
 * @Date: 2018-07-16 12:12:49
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-18 12:19:31
 * @Path m.benting.com.cn /src/person/Index/store.js
 */

import { observable } from 'mobx';
// import Api from '@api';
import Const from '@const';
// import Utils from '@utils';
import common from '@stores/common';
import G from '@stores/g';

export default class store extends common {
  @observable
  state = this.initState({
    userInfo: G.toJS('userInfo'),
    // 关注列表
    followers: Const.__EMPTY__,
    // 粉丝列表
    fans: Const.__EMPTY__,
    // 动态列表
    publishList: Const.__EMPTY__,
    // 我的帖子
    postList: Const.__EMPTY__
  });

  fetch = {
    config: {
      static: [['userInfo']],
      update: ['fetchFollowers', 'fetchFans', 'fetchPublishList', 'fetchPostList']
    },
    // 用户信息
    userInfo: async () => {
      const res = G.fetchUserInfo();

      this.setState(await res, 'userInfo');

      return res;
    },
    // 关注列表
    fetchFollowers: refresh => {
      this.fetchListThenSetState(
        'get_user_followers',
        'followers',
        {},
        refresh
      );
    },
    // 粉丝列表
    fetchFans: refresh => {
      this.fetchListThenSetState('get_user_fans', 'fans', {}, refresh);
    },
    // 发布列表
    fetchPublishList: refresh => {
      this.fetchListThenSetState(
        'get_my_discovery_list',
        'publishList',
        {},
        refresh
      );
    },
    // 我的贴子
    fetchPostList: refresh => {
      this.fetchListThenSetState(
        'get_bbs_my-post-list',
        'postList',
        {},
        refresh
      );
    }
  };
}
