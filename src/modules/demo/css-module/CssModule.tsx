import React, { Component } from 'react';
// import styles from './cssModule.less';

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
                {/* <div className={styles['my-local-css']}>局部类名: {styles['my-local-css']}</div>
                <div className={styles.mylocalcss}>局部类名: {styles.mylocalcss}</div>
                <div className={styles['my-composes']}>组合: {styles['my-composes']}</div>
                <div className="my-global-css">全局类名: my-global-css</div> */}
            </div>
        );
    }
}


export default CssModule;
