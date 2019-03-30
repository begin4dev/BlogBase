import * as React from 'react';
import * as classNames from 'classnames/bind';

import styles from './Navi.module.scss';

const cx = classNames.bind(styles);

interface INaviChild {
  name: string;
  url: string;
}
interface INavi {
  name: string;
  hasChild: boolean;
  url?: string;
  children?: INaviChild[];
}

const navi: INavi[] = [
  { name: 'Profile', url: '/profile', hasChild: false },
  {
    name: 'Development',
    hasChild: true,
    children: [{ name: 'Node', url: '/develop/node' }, { name: 'Javascript', url: '/develop/javascript' }],
  },
];

interface IProps {
  isMobile: boolean;
  visible: boolean;
}

const Navi: React.FunctionComponent<IProps> = ({ isMobile, visible }) => (
  <nav className={cx('navi', { isMobile }, { active: visible })}>test</nav>
);

export default Navi;
