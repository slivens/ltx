import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import classnames from 'classnames';
const prefix="footerbar"
 const List = ({children})=>{
    return(
        <div className={prefix+'_list'}>
            {children}
        </div>
    )
}
 const item=({type})=>{
    return(
        <span  className={classnames(`${prefix}_list-item`,'clearfix')}><Icon type="user" style={{fontSize:".36rem"}}/></span>
    )
}
List.Item = item;
export default List;