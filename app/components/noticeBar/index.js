import React, { Component } from 'react';
import './style/index.less';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import 'antd/es/row/style';
import 'antd/es/col/style';
import {withRouter} from 'react-router-dom';
export default withRouter(({data,history})=>{
    return(
        <div className="ltx_noticeBar">
            <Row
            type="flex"
            align="middle"
            justify="space-around"
            style={{
                textAlign: "center",
                height: "100%"
            }}
            >
                {
                    data.map((item,index)=>
                        <Col key={index} onClick={()=>history.push(item.path)} span={4}>
                            <div className="ltx_noticeBar_pic">
                                <img src={require(`../../../assets/images/${item.pic}`)}/>
                            </div>
                            <div className="ltx_noticeBar_title">{item.title}</div>
                        </Col>
                        )
                }
            </Row>
        </div>
    )
})