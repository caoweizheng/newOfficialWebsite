/**
 * const prefixCls = 'style-493270';
 * const images = '/static/images/src/bbs/Article';
 * @Author: czy0729
 * @Date: 2018-07-11 16:52:03
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-18 10:53:54
 * @Path m.benting.com.cn /src/bbs/Article/store.js
 */
import React from 'react';
import { observable } from 'mobx';
import common from '@stores/commonV2';
import Api from '@api';
import Const from '@const';
import Utils from '@utils';
import G from '@stores/g';
import UI from '@stores/ui';
import HeadFooter from './_HeadFooter';
import { tabsAllDS, competitionTypeDS } from './ds';

export default class Store extends common {
  @observable
  state = this.initState({
    // 留言tabs
    _affixTabs: {
      page: 0
    },

    // 留言框
    _fixedTextarea: {
      show: false,
      placeholder: '',
      onSubmit: Function.prototype
    },

    // 支付框
    _payConfirm: {
      show: false,
      type: '',
      amount: 0,
      playerId: ''
    },

    // 竞猜
    _competition: {
      isMe: false
    },

    // 彩蛋
    _egg: {
      show: false,
      step: 0,
      type: '',
      value: ''
    },

    // 打赏框
    _reward: {
      show: false
    },

    // 用户信息
    userInfo: G.toJS('userInfo'),

    // 我的余额
    walletInfo: G.toJS('walletInfo'),

    // 我的论坛点赞和收藏列表
    bbsLikeAndFavorList: G.toJS('bbsLikeAndFavorList'),

    // 详情
    detail: {},

    // 评论
    comment: Const.__EMPTY__,

    // 加分记录
    score: Const.__EMPTY__,

    // 打赏
    reward: Const.__EMPTY__,

    // 竞猜记录
    competitionRecord: Const.__EMPTY__,

    // 竞猜瓜分记录
    competitionAward: Const.__EMPTY__,

    // 报名信息
    registration: {}
  });

  params = {
    // 评论
    queryComment: {},

    // 竞猜记录
    queryCompetitionRecord: {},

    // 竞猜瓜分
    queryCompetitionAward: {}
  };

  setQuery = {
    // 评论
    comment: index => {
      const { title } = tabsAllDS[index];
      const { id } = this.params.params;
      let query;

      switch (title) {
        case '最新':
          query = {
            _: {
              limit: Const.__LIMIT__,
              order: {
                top: 'desc',
                createTime: 'desc'
              },
              search: {
                threadId: id
              }
            }
          };
          break;

        case '正序':
          query = {
            _: {
              limit: Const.__LIMIT__,
              search: {
                threadId: id
              }
            }
          };
          break;

        case '楼主':
          query = {
            _: {
              limit: Const.__LIMIT__,
              search: {
                threadId: id,
                userId: this.getState('detail').userId
              }
            }
          };
          break;

        case '我的':
          query = {
            _: {
              limit: Const.__LIMIT__,
              search: {
                AND: {
                  threadId: id,
                  OR: {
                    parUserId: this.getState('userInfo').userId,
                    userId: this.getState('userInfo').userId
                  }
                }
              }
            }
          };
          break;

        default:
          break;
      }

      this.setParams({
        queryComment: query
      });
    },

    // 竞猜记录
    competitionRecord: isMe => {
      const { id } = this.params.params;
      const query = {
        _: {
          limit: Const.__LIMIT__,
          order: {
            created_at: 'desc'
          },
          search: {
            thread_id: id
          }
        }
      };

      if (isMe) {
        const { userId } = this.getState('userInfo');
        query._.search.user_id = userId;
      }

      this.setParams({
        queryCompetitionRecord: query
      });
    },

    // 竞猜瓜分记录
    competitionAward: isMe => {
      const { id } = this.params.params;
      const query = {
        _: {
          limit: Const.__LIMIT__,
          order: {
            bonus: 'desc'
          },
          search: {
            thread_id: id,
            'bonus[>]': 0
          }
        }
      };

      if (isMe) {
        const { userId } = this.getState('userInfo');
        query._.search.user_id = userId;
      }

      this.setParams({
        queryCompetitionAward: query
      });
    }
  };

  fetch = {
    config: {
      static: [
        ['userInfo', 'userInfo'],
        ['walletInfo', 'walletInfo'],
        ['bbsLikeAndFavorList', 'bbsLikeAndFavorList']
      ],
      one: [['detail', true], 'score', 'reward'],
      update: ['comment']
    },

    // 用户信息
    userInfo: async () => {
      const res = G.fetchUserInfo();

      this.setState(await res, 'userInfo');

      return res;
    },

    // 我的余额
    walletInfo: async () => {
      const res = G.fetchWalletInfo();

      this.setState(await res, 'walletInfo');

      return res;
    },

    // 我的论坛点赞和收藏列表
    bbsLikeAndFavorList: async () => {
      const res = G.fetchBBSLikeAndFavorList();

      this.setState(await res, 'bbsLikeAndFavorList');

      return res;
    },

    // 文章详情
    detail: async () => {
      const { id } = this.params.params;
      const res = this.fetchThenSetState('get_bbs_post-detail', 'detail', {
        threadId: id
      });
      const data = await res;

      // 竞猜模块
      const { guessingData } = data;
      if (guessingData) {
        // 竞猜未结束只查询记录，结束后只查询获胜者
        if (this.isCompetitionEnd || this.computed.isCompetitionEnd()) {
          this.setQuery.competitionAward();
          await this.fetch.competitionAward(true);
        } else {
          this.setQuery.competitionRecord();
          await this.fetch.competitionRecord(true);
        }
      }

      // [CLIENT]报名模块
      if (Const.__CLIENT__) {
        const { registrationData } = data;

        if (registrationData) {
          await this.fetch.registration();
        }
      }

      this.page.setHeader();

      return res;
    },

    // 评论
    comment: refresh => {
      const { queryComment } = this.params;

      return this.fetchListThenSetState(
        'get_bbs_post-comment-list',
        'comment',
        queryComment,
        refresh
      );
    },

    // 加分记录
    score: () => {
      const { id } = this.params.params;

      return this.fetchThenSetState('get_bbs_scoretips-list', 'score', {
        _: {
          limit: Const.__LIMIT__ * 3,
          order: {
            point: 'desc'
          },
          search: {
            relevType: 10016,
            relevId: id
          }
        }
      });
    },

    // 报名信息
    registration: async () => {
      const { id } = this.params.params;

      const res = Api.PP('get_registration_detail', {
        thread_id: id
      });
      const data = await res;

      if (data.code === '0') {
        this.setState(data.data, 'registration');
      }

      return res;
    },

    // 竞猜记录
    competitionRecord: refresh => {
      const { guessingData } = this.getState('detail');
      if (!guessingData) {
        return false;
      }

      const { queryCompetitionRecord } = this.params;
      return this.fetchListThenSetState(
        'get_competition_record-list',
        'competitionRecord',
        queryCompetitionRecord,
        refresh
      );
    },

    // 竞猜瓜分记录
    competitionAward: refresh => {
      const { guessingData } = this.getState('detail');
      if (!guessingData) {
        return false;
      }

      const { queryCompetitionAward } = this.params;
      return this.fetchListThenSetState(
        'get_competition_record-list',
        'competitionAward',
        queryCompetitionAward,
        refresh
      );
    },

    // 打赏列表
    reward: () => {
      const { id } = this.params.params;

      return this.fetchThenSetState('get_new_reward-list', 'reward', {
        _: {
          limit: Const.__LIMIT__,
          search: {
            dataId: id,
            typeId: 3
          }
        }
      });
    }
  };

  computed = {
    // 是否点赞
    isLike: () => {
      const { id } = this.params.params;
      const bbsLikeAndFavorList = this.getState('bbsLikeAndFavorList');

      if (!bbsLikeAndFavorList.list || !bbsLikeAndFavorList.list.like) {
        return false;
      }

      return bbsLikeAndFavorList.list.like.findIndex(item => item == id) !== -1;
    },

    // 是否收藏
    isFavor: () => {
      const { id } = this.params.params;
      const bbsLikeAndFavorList = this.getState('bbsLikeAndFavorList');

      if (!bbsLikeAndFavorList.list || !bbsLikeAndFavorList.list.favorite) {
        return false;
      }

      return (
        bbsLikeAndFavorList.list.favorite.findIndex(item => item == id) !== -1
      );
    },

    // 竞猜是否结束
    isCompetitionEnd: () => {
      const { guessingData = {} } = this.getState('detail');
      const { competitionWinner } = guessingData;

      return competitionWinner != 0;
    },

    // 竞猜类型label
    competitionTypeLabel: () => {
      const { guessingData = {} } = this.getState('detail');
      const { competitionType } = guessingData;

      if (!competitionType) {
        return '';
      }

      return Utils.getLabel(competitionTypeDS, competitionType);
    }
  };

  do = {
    // 回复
    comment: async query => {
      const { point, cake } = await Api.P('do_bbs_posted', {
        ...query,
        type: 2
      });

      this.fetch.comment(true);
      this.page.hideFixedTextarea();
      Utils.light(point ? `回复成功，积分+${point}` : '回复成功');

      // 中彩蛋
      if (typeof cake === 'object') {
        this.page.showEggMask(cake.type, cake.value);
      }
    },

    // 收藏
    toggleFavor: async () => {
      const { threadId } = this.getState('detail');

      await G.doFavor(threadId);

      const bbsLikeAndFavorList = G.getState('bbsLikeAndFavorList');

      // 更新是否点赞
      this.setState(bbsLikeAndFavorList, 'bbsLikeAndFavorList');

      this.fetch.detail();
    },

    // 点赞
    toggleLike: async () => {
      const { postId, threadId } = this.getState('detail');

      await G.doLike(postId, threadId);

      const bbsLikeAndFavorList = G.getState('bbsLikeAndFavorList');

      // 更新是否点赞
      this.setState(bbsLikeAndFavorList, 'bbsLikeAndFavorList');

      this.fetch.detail();
    },

    // 加积分
    addScore: async () => {
      const { id } = this.params.params;

      const data = await Api.P('do_bbs_scoretips-post', {
        threadId: id,
        changeScore: 1
      });

      this.fetch.score();
      Utils.light(`已成功为他加 ${data.point} 积分`);
    },

    // 红人加积分
    addScoreHongren: async value => {
      const { id } = this.params.params;

      const _value = parseInt(value);

      /* eslint-disable-next-line */
      if (isNaN(_value) || _value < 1 || _value > 10) {
        Utils.light('请输入1-10');
        return;
      }

      await Api.P('do_hong-ren_score', {
        threadId: id,
        changeScore: _value
      });

      this.fetch.score();
      Utils.light(`已成功为他加 ${value} 积分`);
    },

    // 打赏
    reward: async value => {
      const { id } = this.params.params;

      await Api.P('do_new_reward', {
        dataId: id,
        typeId: 3,
        goodsId: value
      });

      this.page.hideReward();
      Utils.light('打赏成功');
      this.fetch.reward();
      this.fetch.comment(true);
    },

    // 支持参赛者
    betting: async () => {
      const { threadId } = this.getState('detail');
      const { playerId, amount } = this.getState('_payConfirm');

      await Api.P('do_competition_betting', {
        thread_id: threadId,
        player_id: playerId,
        amount
      });

      this.page.hidePayConfirm();
      Utils.success();

      this.fetch.competitionRecord(true);
      this.fetch.detail();
      if (this.competitionTypeLabel === '金币') {
        this.fetch.walletInfo();
      } else {
        this.fetch.userInfo();
      }
    }
  };

  page = {
    // 头部设置收藏按钮，分享按钮
    setHeader: () => {
      const { _loaded, threadId, title, json, content } = this.getState(
        'detail'
      );

      if (!_loaded) {
        return;
      }

      let icon = Const.__SHARE_IMG__;
      if (json) {
        const entities = Utils.getRealDraftEntityMap(json);
        icon = entities.length ? entities[0] : Const.__SHARE_IMG__;
      }

      UI.header({
        bd: null,
        ft: (
          <HeadFooter
            config={{
              icon,
              link: `${Const.__WEB__}/bbs/article/${threadId}`,
              title,
              desc: Utils.removeHTMLTag(content)
            }}
          />
        )
      });
    },

    // Tab点击
    onTabClick: (item, index) => {
      this.setQuery.comment(index);
      this.fetch.comment(true);
      this.setState({ page: index }, '_affixTabs');

      // #todo
      // Utils.scrollTo(0);
    },

    // 显示FixedTextarea
    onCommentClick: item => {
      const { threadId } = this.getState('detail');
      let placeholder;
      let onSubmit;

      if (item.parentId) {
        // 回复用户
        placeholder = `回复${item.niname}：`;
        onSubmit = value => {
          if (Utils.getCharLength(value.value) < 2) {
            Utils.light('回复的字数不能少于2');
            return false;
          }

          this.do.comment({
            content: value.value,
            commentImg: value.id,
            threadId,
            parentId: item.parentId
          });
          return true;
        };
      } else {
        // 回复评论
        placeholder = '回复：';
        onSubmit = value => {
          if (Utils.getCharLength(value.value) < 2) {
            Utils.light('回复的字数不能少于2');
            return false;
          }

          this.do.comment({
            content: value.value,
            commentImg: value.id,
            threadId
          });
          return true;
        };
      }

      this.page.showFixedTextarea({
        placeholder,
        onSubmit
      });
    },

    // 显示回复框
    showFixedTextarea: item =>
      this.setState(
        {
          ...item,
          show: true
        },
        '_fixedTextarea'
      ),

    // 隐藏回复框
    hideFixedTextarea: () =>
      this.setState(
        {
          show: false
        },
        '_fixedTextarea'
      ),

    // 180528 显示消费确认框
    showPayConfirm: values =>
      this.setState(
        {
          ...values,
          show: true
        },
        '_payConfirm'
      ),

    // 180528 隐藏消费确认框
    hidePayConfirm: () =>
      this.setState(
        {
          playerId: '',
          amount: 0,
          type: '',
          show: false
        },
        '_payConfirm'
      ),

    // 显示支持金额输入框
    showBettingModal: playerItem => {
      let amount;
      let payType;

      if (this.competitionTypeLabel === '金币') {
        amount = this.getState('walletInfo').sysAmount;
        payType = 'coin';
      } else {
        amount = this.getState('userInfo').point;
        payType = 'nido';
      }

      Utils.onPrompt(
        '我要支持',
        value => {
          const _value = parseInt(value);

          /* eslint-disable-next-line */
          if (isNaN(_value) || _value < 1) {
            Utils.light('数量不能少于1');
            return;
          }

          this.page.showPayConfirm({
            playerId: playerItem.id,
            amount: _value,
            type: payType
          });
        },
        undefined,
        <React.Fragment>
          <p className="t-28 t-sub">
            <span>支持选手：</span>
            <span className="t-primary">{playerItem.name}</span>
          </p>
          <p className="t-28 t-sub">
            <span>{this.competitionTypeLabel}余额：</span>
            <span className="t-primary">{Utils.formatNumber(amount)}</span>
          </p>
        </React.Fragment>,
        ['输入数量']
      );
    },

    // 切换竞猜记录我的
    toggleCompetitionRecord: () => {
      const { isMe } = this.getState('_competition');

      this.setState({ isMe: !isMe }, '_competition');
      this.setQuery.competitionRecord(!isMe);
      this.fetch.competitionRecord(true);
    },

    // 切换竞猜瓜分记录我的
    toggleCompetitionAward: () => {
      const { isMe } = this.getState('_competition');

      this.setState({ isMe: !isMe }, '_competition');
      this.setQuery.competitionAward(!isMe);
      this.fetch.competitionAward(true);
    },

    // 显示彩蛋遮罩
    showEggMask: (type, value) =>
      this.setState(
        {
          show: true,
          type,
          value
        },
        '_egg'
      ),

    // 隐藏彩蛋遮罩
    hideEggMask: () =>
      this.setState(
        {
          show: false
        },
        '_egg'
      ),

    // 敲碎彩蛋
    animated: false,
    onEggKnock: async () => {
      if (this.page.animated) {
        return false;
      }
      this.page.animated = true;

      await Utils.sleep(200);
      this.setState({ step: 1 }, '_egg');

      await Utils.sleep(1400);
      this.setState({ step: 2 }, '_egg');

      return true;
    },

    // 显示打赏框
    showReward: () =>
      this.setState(
        {
          show: true
        },
        '_reward'
      ),

    // 隐藏打赏框
    hideReward: () =>
      this.setState(
        {
          show: false
        },
        '_reward'
      )
  };

  storeInit() {
    const id = 0;

    this.setQuery.comment(id);
    this.setState({ page: id }, '_affixTabs');
  }

  storeDidMount() {
    // [CLIENT]报名信息是个人信息，只在客户端请求
    // 因为绑定在fetchPostDetail里面，而又是one，所以需要每次进入store时手动请求
    if (Const.__CLIENT__) {
      const { registrationData } = this.getState('detail');

      if (registrationData) {
        this.fetch.registration();
      }
    }
  }
}
