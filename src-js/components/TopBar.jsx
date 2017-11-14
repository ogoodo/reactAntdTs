import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'antd';

const TopBar = () => {
    return(
        <div>
            <span>面包屑</span>
            <span>切换身份</span>
            <span>用户名</span>
            <span>消息</span>
            <span>帮助</span>
            <span>退出</span>
        </div>
    )
};

export default TopBar;