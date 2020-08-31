import React, {useContext} from "react";
import Context from "./context";

const Route = (props) => {
    const context=useContext(Context)
    const currentRoutePath = context.location.pathname; // 从上下文中获取到当前路由的路径
    const {path, component:Component} = props; // 获取给Route组件传递的props属性
    const props2 = {
        ...context
    }
    if (currentRoutePath === path) {
        return (
            <Component {...props2}></Component>
        );
    }
    return null
};

export default Route;