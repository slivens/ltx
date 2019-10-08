import React, { Component } from 'react';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';
import './style/index.less';
export default ({item,onClick})=>{
    return(
    <WingBlank size="lg" >
                            <WhiteSpace size="lg" />
                            <div className="conmon_card" onClick={onClick}>
                                <img src={require(`../../../assets/images/${item.pic}`)}/>
                                <div className="conmon_card_title">{item.title}</div>
                            </div>
                    <WhiteSpace size="lg" />
                        </WingBlank>
    )
}