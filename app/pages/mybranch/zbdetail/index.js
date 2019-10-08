import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { Button } from 'antd-mobile';
class index extends Component {
    render() {
        return (
            <div className="zbdetail">
                <div className="zbdetail_topbar">
                    <Icon
                        onClick={() => this.props.history.goBack()}
                        style={{
                            position: "absolute",
                            left: ".1rem",
                            top: "50%",
                            color: "#F7F8F4",
                            fontSize: ".24rem",
                            transform: "translateY(-50%)"
                        }}
                        type="left"
                    />
                    活动详情
                    </div>
                <div className="zbdetail_pic">
                    <img src={require('../../../../assets/images/banner2.png')} />
                </div>
                <div className="shuoming">
                    <div className="shuoming_title">创业理论培训</div>
                    <div className="shuoming_detail">
                        <span>
                            <Icon type="tags" />
                            &nbsp;党组织活动
                            </span>
                        <span>
                            <Icon style={{ marginLeft: "10px" }} type="clock-circle" />
                            &nbsp;报名截止时间：2019年8月1日
                                </span>
                    </div>
                </div>
                <div className="active_detail">
                    <div className="active_detail_item">
                        <div className="title"><Icon type="clock-circle" />活动时间</div>
                        <div className="content">2019年8月6日 &nbsp;8:30-17:30</div>
                    </div>
                    <div className="active_detail_item">
                        <div className="title"><Icon type="clock-circle" />活动地点</div>
                        <div className="content">福建省福州市铜盘路</div>
                    </div>
                    <div className="active_detail_item">
                        <div className="title"><Icon type="clock-circle" />活动对象</div>
                        <div className="content">党员</div>
                    </div>
                    <div className="active_detail_item">
                        <div className="title"><Icon type="clock-circle" />活动内容</div>
                        <div className="content">创业理论培训</div>
                    </div>
                </div>
                <div className="activebtn">
                    <Button style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        width: "90%",
                        margin: "0 auto",
                        background: "#F5432F"
                    }}>我要报名</Button>
                </div>
            </div>
        );
    }
}

export default withRouter(index);