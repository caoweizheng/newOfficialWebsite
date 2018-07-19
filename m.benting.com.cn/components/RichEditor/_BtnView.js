/**
 * const prefixCls = 'style-160458';
 * const images = '/static/images/components/RichEditor';
 * @Author: czy0729
 * @Date: 2018-07-11 23:16:55
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-11 23:20:29
 * @Path m.benting.com.cn /components/RichEditor/_BtnView.js
 */
import React from 'react';
import classNames from 'classnames';
import { Button, Modal } from 'antd-mobile';
import Styles from '@styles';
import Editor from './_Editor';

const prefixCls = 'style-160458';

export default class _BtnView extends React.Component {
  state = {
    visible: false
  };

  toggleModal = () => {
    const { visible } = this.state;

    this.setState({
      visible: !visible
    });
  };

  render() {
    const { title, editorState, className } = this.props;
    const { visible } = this.state;

    return (
      <div className={classNames(prefixCls, className)}>
        <Button size="small" inline onClick={this.toggleModal}>
          预览
        </Button>
        <Modal maskClosable={false} visible={visible}>
          <div className={`${prefixCls}__modal`}>
            <span className="am-modal-close-x" onClick={this.toggleModal} />
            <p className="text-xl" style={{ marginRight: '.48rem' }}>
              {title || '输入贴子标题'}
            </p>
            <Editor
              className="text-desc mt-lg"
              editorState={editorState}
              readOnly
            />
          </div>
        </Modal>

        <style jsx global>{`
          .style-160458 {
            display: inline-block;
            height: 0.6rem;
          }
          .${prefixCls}__modal {
            position: relative;
            padding: 0.48rem;
            font-size: ${Styles.font_md};
            color: initial;
            text-align: left;
          }
          .${prefixCls}__modal .am-modal-close-x {
            position: absolute;
            top: 0.64rem;
            right: 0.48rem;
          }
        `}</style>
      </div>
    );
  }
}
