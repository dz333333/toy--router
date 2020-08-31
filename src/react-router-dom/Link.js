import React ,{useContext}from 'react';
import Context from './context';
const Link = (props) => {
    const context=useContext(Context)
    let {to} = props; // 从Link组件上获取到配置的to路径
    // 点击Link的时候调用当前路由的history的push方法进行跳转即可
    return (
    <a onClick={() => {context.history.push(to)}}>{props.children}</a>
    );
};

export default Link;