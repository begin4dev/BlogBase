import * as React from "react";
import * as classNames from "classnames/bind";

import styles from "./Overlay.scss";

const cx = classNames.bind(styles);

interface IProps {
  visible?: boolean;
}

const Overlay: React.SFC<IProps> = ({ visible }) => {
  return <div className={cx("overlay", { visible })} />;
};

export default Overlay;