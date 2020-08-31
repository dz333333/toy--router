import React, { useState, useEffect } from 'react';
import Context from "./context";
const HashRouter = (props) => {

    const [location,setLocation]=useState({
        pathname: window.location.hash.slice(1) || "/", // 获取浏览器地址栏中的hash值，如果不存在则默认为"/"
        query: undefined
    })
 
    useEffect(()=>{
        window.addEventListener("hashchange", () => { // 监听浏览器地址栏hash值变化
            setLocation(
                {
                    ...location,
                    pathname: window.location.hash.slice(1) // 更新pathname
                }
            )
        });
    },[])
    const currentRoute = {
        location: location, 
        history: { // 新增一个history对象用于实现当前路由的切换
            push: (to) => {
                if (typeof to === "object") { // 如果to是一个对象
                    let { pathname, query } = to; // 取出pathname和query
                    window.location.hash = pathname; // 更新浏览器hash值，触发浏览器hashchange事件
                    location.query = query; // 更新query
                } else { // 修改浏览器地址栏的hash值
                    window.location.hash = to; // 更新浏览器hash值
                }
            }
        }
    }
    return (
        <Context.Provider value={currentRoute}>
            {props.children}
        </Context.Provider>
    );
};

export default HashRouter;