import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import dataSource from '../../../assets/data/alldata.json';
import { withRouter,Route } from 'react-router-dom';
import Test from './test';
const detailTop = ({history,location,match}) => {
    const detid=location.pathname.split('/')[2];
    const findOne = dataSource.filter((item)=>detid===item.id)[0];
    console.log('@沈的第二个发生飞洒发爱的色放第三方啊士大夫暗室逢灯',location,findOne)
    
    return (
        <div className="ltx_itemDetail">
            <div className="ltx_itemDetail_topbar">
                <Icon 
                onClick={()=>history.goBack()}s
                style={{
                position: "absolute",
                left: ".1rem",
                top: "50%",
                color: "#F7F8F4",
                fontSize: ".24rem",
                transform: "translateY(-50%)"
            }} type="left" />
            </div>
            <div className="ltx_itemDetail_body">
                <div className="title">{findOne.title}</div>
                <div className="date"><span>2019-02-17</span>&nbsp;&nbsp;&nbsp;&nbsp;1032阅读</div>
                <div className="pic"><img src={require(`../../../assets/images/${findOne.pic}`)}/></div>
                <div className="content" dangerouslySetInnerHTML={{__html:findOne.content}}></div>
            </div>
        </div>
    )
}
export default withRouter(detailTop)
