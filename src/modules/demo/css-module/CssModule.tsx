import React, { Component } from 'react';
import * as styles from './cssModule.less';
// const styles = require('./cssModule.less');

class CssModule extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h2>测试样式模块化</h2>
        <div className={styles.my_local_css}>局部类名: {styles.my_local_css}</div>
        <div className={styles.mylocalcss}>局部类名: {styles.mylocalcss}</div>
        <div className={styles.my_composes}>组合: {styles.my_composes}</div>
        <div className="my-global-css">全局类名: my-global-css</div>
        <div>
          {/* {JSON.stringify(styles)} */}
          {
            Object.keys(styles).map((key) => {
              return <div>{`${key}:   ${styles[key]}`}</div>
            })
          }
        </div>
      </div>
    );
  }
}

export default CssModule;
