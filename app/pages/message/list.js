import React, { Component } from 'react';
import Avatar from 'antd/es/avatar';
import 'antd/es/avatar/style';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import 'antd/es/col/style';
import 'antd/es/row/style';
import {Badge} from 'antd-mobile';
const List = ({ children }) => {
    return (
        <div className="mesg_list">
            {children}
        </div>
    )
}

const Item = ({ title, avatar, date, content, count }) => {
    return (
        <div className="mesg_item">
            <Row style={{height:"100%"}} type="flex" align="middle">
                <Col span={4}>&nbsp;&nbsp;<Avatar icon="user" /></Col>
                <Col span={14}><div className="mesg_item_content">
                    <span className="title">{title}</span>
                    <div className="content">{content}</div>
                </div></Col>
                <Col span={6}><div className="mesg_item_right">
                    <div className="date">{date}</div>
                    <div className="count"><Badge text={count} hot/></div>
                </div></Col>
            </Row>
        </div>
    )
}
List.Item = Item;

export default List;