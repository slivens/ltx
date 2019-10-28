import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { Button } from 'antd-mobile';
import axios from 'axios';
import commonUrl from '../../../config';
class index extends Component {
    state={
        detail:{}
    }
    componentWillMount(){
        const {pathname} = this.props.location;
        const actId = pathname.split('/')[2];
        console.log(actId)
        axios.post(`${commonUrl}/app/qryActivityDetail.do`,
        {actId}
         )
        .then(res => {
            if(res.data.code==="success"){
                this.setState({detail:res.data.data})
                console.log(res)
            }
        })
    }
    render() {
        const {detail}=this.state;
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
                    <img src={detail.imgPath} />
                </div>
                <div className="shuoming">
                    <div className="shuoming_title">{detail.title}</div>
                    <div className="shuoming_detail">
                        <span>
                            <Icon type="tags" />
                            &nbsp;{detail.actCategory}
                            </span>
                        <span>
                            <Icon style={{ marginLeft: "10px" }} type="clock-circle" />
                            &nbsp;报名截止时间：{detail.expiredDate}
                                </span>
                    </div>
                </div>
                <div className="active_detail">
                    <div className="active_detail_item">
                        <div className="title"><Icon type="clock-circle" />活动时间</div>
                        <div className="content">{detail.actDate} &nbsp;{detail.actTime}</div>
                    </div>
                    <div className="active_detail_item">
                        <div className="title"><Icon type="clock-circle" />活动地点</div>
                        <div className="content">{detail.actAddr}</div>
                    </div>
                    <div className="active_detail_item">
                        <div className="title"><Icon type="clock-circle" />活动对象</div>
                        <div className="content">{detail.actPerson}</div>
                    </div>
                    <div className="active_detail_item">
                        <div className="title"><Icon type="clock-circle" />活动内容</div>
                        <div dangerouslySetInnerHTML={{__html:detail.publicInfo}} className="content"></div>
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