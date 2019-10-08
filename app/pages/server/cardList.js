import React, { Component } from 'react';
import Row from 'antd/es/row';
import 'antd/es/row/style';
import Col from 'antd/es/col';
import 'antd/es/col/style';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
export default ({ title, data }) => {

    return (
            <div>
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title={<div className="ltx_card">
                            <span className="title_line" />
                            <span className="card_title">{title}</span>
                        </div>}
                    />
                    <Card.Body>
                        <Row>
                            {
                                data.map((item,index) =>
                                    <Col key={index} className="card_item" span={8}>
                                        <div className="card_item_pic">
                                            <img src={require(`../../../assets/images/${item.pic}`)} /></div>
                                        <div className="card_item_title">{item.itemtile}</div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Card.Body>
                </Card>
                <WhiteSpace size="lg" />
            </div>
        

    )
}