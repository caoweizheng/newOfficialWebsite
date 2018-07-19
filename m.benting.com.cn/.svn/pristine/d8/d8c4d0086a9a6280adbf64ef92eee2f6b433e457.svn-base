/**
 * const prefixCls = 'style-157598';
 * const images = '/static/images/src/discovery/Index';
 * @Author: czy0729
 * @Date: 2018-07-04 14:40:55
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-09 15:47:55
 * @Path m.benting.com.cn /src/discovery/Index/store.js
 */
import React from 'react';
import { observable } from 'mobx';
import { Flex } from 'antd-mobile';
import common from '@stores/common';
import Api from '@api';
import Const from '@const';
import Utils from '@utils';
import G from '@stores/g';
import UI from '@stores/ui';
import { images, tabsDS } from './ds';

export default class Store extends common {
  @observable
  state = this.initState({
    _affixTabs: {
      page: 0
    },

    _discoveryRow: {
      redOpenIds: [], // 红包记录展开id
      likeOpenIds: [] // 点赞记录展开id
    },

    _fixedTextarea: {
      show: false,
      placeholder: '',
      onSubmit: Function.prototype
    },

    // 用户信息
    userInfo: G.toJS('userInfo'),

    // 发现列表
    discovery: Const.__EMPTY__
  });

  initFetch = {
    static: [['fetchUserInfo', 'userInfo']],
    one: ['checkDiscoverySpecialNew'],
    update: ['fetchDiscovery']
  };

  storeInit() {
    const { id = 0 } = this.getParams().params;

    this.setQueryDiscovery(id);
    this.setState({ page: id }, '_affixTabs');
  }

  /* ==================== params ==================== */
  initParams = {
    __cache: true,

    // 发现列表Query
    queryDiscovery: {}
  };

  // 发现列表Query
  setQueryDiscovery = index => {
    const { title } = tabsDS[index];
    let query;

    switch (title) {
      case '最新':
        query = {
          _: {
            limit: Const.__LIMIT__,
            search: {
              viewType: 0
            }
          }
        };
        break;

      case '精选':
        query = {
          _: {
            limit: Const.__LIMIT__,
            search: {
              isReclist: 1
            }
          }
        };
        break;

      case '渔获':
        query = {
          _: {
            limit: Const.__LIMIT__,
            search: {
              'dtsourceCategory[>]': 0
            }
          }
        };
        break;

      case '好友':
        query = {
          _: {
            limit: Const.__LIMIT__,
            search: {
              viewType: 1
            }
          }
        };
        break;

      default:
        break;
    }

    this.setParams({
      queryDiscovery: query
    });
  };

  /* ==================== DS ==================== */
  // 用户信息
  fetchUserInfo = async () => {
    const res = G.fetchUserInfo();

    this.setState(await res, 'userInfo');

    return res;
  };

  // 发现列表
  fetchDiscovery = refresh => {
    const { queryDiscovery } = this.getParams();

    return this.fetchListThenSetState(
      'get_discovery_list',
      'discovery',
      queryDiscovery,
      refresh,
      'publishTime'
    );
  };
  updateOneDiscovery = infoId =>
    this.updateOneThenSetState('get_discovery_list', 'discovery', {
      infoId
    });

  /* ==================== Action ==================== */
  // 点赞
  doToggleLike = async infoId => {
    await Api.P('do_like', { infoId });

    // 更新发现列表一项
    this.updateOneDiscovery(infoId);
  };

  // 评论
  doComment = async (query, infoId) => {
    if (Utils.getCharLength(query.con) < 2) {
      Utils.light('回复的字数不能少于2');
      return false;
    }

    if (!G.insertReply(query.con)) {
      Utils.light('检测到最近有类似回复，请不要恶意灌水');
      return false;
    }

    const { point } = await Api.P('do_comment', query);

    this.hideFixedTextarea();
    Utils.light(point == 0 ? '回复成功' : `回复成功，积分+${point}`);

    // 更新发现列表一项
    this.updateOneDiscovery(infoId);
    return true;
  };

  // 关注
  doFollow = async (userId, infoId) => {
    await Api.P('do_add_follow', {
      concernId: userId
    });

    Utils.light('关注成功');
    this.updateOneDiscovery(infoId);
  };

  // 领红包
  doRedClick = async (packetId, redType, infoId) => {
    const data = await Api.PP('do_redpacket_get', {
      packetId
    });

    let redTypeText;
    let ext = '';
    let link;

    switch (parseInt(redType)) {
      case 1:
        redTypeText = '金币';
        ext = '枚';
        link = '/person/coin';
        break;

      case 2:
        ext = '积分';
        link = '/person/grade';
        break;

      case 3:
        ext = '元';
        link = '/person/wallet';
        break;

      case 4:
        redTypeText = '优惠券';
        ext = '元';
        link = '/person/prize';
        break;

      default:
        break;
    }

    if (data.code !== 0) {
      Utils.light(data.err);
    } else {
      UI.showMask({
        children: (
          <Flex
            direction="column"
            style={{
              position: 'relative'
            }}
            onClick={UI.hideMask}
          >
            <img
              key="1"
              src={`${images}/red-modal.png`}
              style={{
                width: '5.62rem',
                height: '8.84rem'
              }}
              alt=""
            />
            <p
              key="2"
              className="t-36 t-c"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                marginTop: '100%',
                color: '#FBD371'
              }}
            >
              您抢到了{data.data}
              {ext}
              {redTypeText}
            </p>
            <div
              key="3"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '0.64rem',
                marginTop: '130%'
              }}
              onClick={e => {
                e.stopPropagation();
                Utils.router.push(link);
              }}
            />
          </Flex>
        )
      });
    }

    this.updateOneDiscovery(infoId);
  };

  /* ==================== Page ==================== */
  // 检查新精选
  checkDiscoverySpecialNew = async () => {
    const { page } = this.getState('_affixTabs');
    let { time } = G.getState('discoverySpecial');

    if (!time) {
      time = Math.floor(Utils.getTimestamp() / 1000) - 24 * 60 * 60;
    }

    const data = await Api.P('get_discovery_list', {
      _: {
        limit: 1,
        search: {
          isReclist: 1,
          'publishTime[>]': time
        }
      }
    });

    if (data.list.length) {
      const { publishTime } = data.list[0];
      const { recordtotal } = data.pageinfo;

      G.discoverySpecialSetNew(
        publishTime,
        recordtotal,
        page === tabsDS.findIndex(item => item.title === '精选')
      );
    }
  };

  // Tab点击
  onTabClick = (item, index) => {
    const { title } = tabsDS[index];
    const cb = () => {
      this.setQueryDiscovery(index);
      this.fetchDiscovery(true);
      this.setState({ page: index }, '_affixTabs');
    };

    if (title === '精选') {
      G.discoverySpecialSetReaded();
    }

    if (title === '好友') {
      Utils.checkLogin(cb);
    } else {
      cb();
    }

    Utils.scrollTo(0);
  };

  // 回复点击
  onCommentClick = item => {
    let placeholder;
    let onSubmit;

    if (item.userId) {
      // 回复用户
      placeholder = `回复${item.name}：`;
      onSubmit = value =>
        this.doComment(
          {
            parId: item.tbId,
            con: value
          },
          item.infoId
        );
    } else {
      // 回复评论
      placeholder = '回复：';
      onSubmit = value =>
        this.doComment(
          {
            infoId: item.infoId,
            con: value
          },
          item.infoId
        );
    }

    this.showFixedTextarea({
      placeholder,
      onSubmit
    });
  };

  // 点赞记录显示更多
  onLikeLogsOpen = infoId => {
    const { likeOpenIds } = this.getState('_discoveryRow');

    this.setState(
      {
        likeOpenIds: [...likeOpenIds, infoId]
      },
      '_discoveryRow'
    );
  };

  // 红包领取记录显示更多
  onRedLogsOpen = infoId => {
    const { redOpenIds } = this.getState('_discoveryRow');

    this.setState(
      {
        redOpenIds: [...redOpenIds, infoId]
      },
      '_discoveryRow'
    );
  };

  // 显示回复框
  showFixedTextarea = item =>
    this.setState(
      {
        ...item,
        show: true
      },
      '_fixedTextarea'
    );

  // 隐藏回复框
  hideFixedTextarea = () =>
    this.setState(
      {
        show: false
      },
      '_fixedTextarea'
    );
}
