import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { Card, WhiteSpace } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
class index extends Component {
    render() {
        return (
            <div className="my_branch">
                <div className="my_branch_topbar">
                    <Icon
                        onClick={() => this.props.history.goBack()}
                        style={{
                            position: "absolute",
                            left: ".1rem",
                            top: "50%",
                            color: "#F7F8F4",
                            fontSize: ".24rem",
                            transform: "translateY(-50%)"
                        }} type="left" />
                    支部信息</div>
                <div className="my_branch_follow">&nbsp;&nbsp;&nbsp;<span className="title">所属于支部</span>&nbsp;&nbsp;<span className="content">第四党支部</span></div>
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title={<div className="my_branch_card">
                            <span className="title_line" />
                            <span className="card_title">基本情况</span>
                        </div>}
                    />
                    <Card.Body>
                        第四党支部组织召开了支部大会，内容包括反腐倡廉第一季学习内容的学习，及支部集中学习活动。共有16名党员进行了学习交流。按照院纪委关于“反腐倡廉每季一课”2019年第一季度学习内容安排，支部委员提前给支部全体党员发放了学习材料。
                    </Card.Body>
                </Card>
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title={<div className="my_branch_card">
                            <span className="title_line" />
                            <span className="card_title">支部组织情况</span>
                        </div>}
                    />
                    <Card.Body>
                        支部书记：王成林<br/>
                        第一党小组组长：柳婷<br/>
                        第二党小组组长：刘文华<br/>
                        第三党小组组长：纪晓东<br/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default withRouter(index);