/**
 * const prefixCls = 'style-170053';
 * const images = '/static/images/components/Link';
 * @Author: czy0729
 * @Date: 2018-07-03 14:30:27
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-11 10:29:42
 * @Path m.benting.com.cn /components/Link/index.js
 */
import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Utils from '@utils';

const _Link = props => {
  const { href, as, block, flex, className, children, ...other } = props;
  const cls = classNames(className, {
    inline: !(block || flex),
    block,
    flex
  });

  return (
    <React.Fragment>
      {href ? (
        <Link href={href} as={as}>
          <a className={cls} {...other}>
            {children}
          </a>
        </Link>
      ) : (
        <a className={cls} onClick={Utils.u} {...other}>
          {children}
        </a>
      )}

      <style jsx>{`
        .c-link {
        }
        .inline {
          display: inline-block;
        }
        .block {
          display: block;
        }
        .flex {
          display: flex;
        }
      `}</style>
    </React.Fragment>
  );
};

export default _Link;
