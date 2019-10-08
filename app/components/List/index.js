import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import "antd/es/icon/style";
const prefix="ltx_select";
import './style/index.less';
const List = ({children})=>{
    return(
        <div className={prefix+'_list'}>
            {children}
        </div>
    )
}
 const item=({type,children,onClick})=>{
    return(
        <div className={prefix+'_item'} onClick={onClick}>
            <Icon className="select-icon" type={type}/>
            &nbsp;&nbsp;
            <span className="select-title">{children}</span>
            <Icon className="select-right" type="right"/>
        </div>
    )
}
List.Item = item;
export default List;