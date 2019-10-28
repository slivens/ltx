import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { Card, WhiteSpace } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import commonUrl from '../../../config';
import NoData from '../../../components/nodata';
class Zbinfo extends Component {
    state={
        infodata:{}
    }
    componentWillMount() {
        axios.post(`${commonUrl}/app/findPartyBranchInfo.do`,{partyBranchId:this.props.partyBranchId})
        .then(res=>{
            console.log('@@@@@app',res)
            this.setState({infodata:res.data.data})
        })
    }
    render() {
        const {infodata}=this.state;
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
                        {
                            this.props.partyBranchId?
                        <div className="my_branch_belong">
                            <div className="my_branch_follow">&nbsp;&nbsp;&nbsp;<span className="title">所属于支部</span>&nbsp;&nbsp;<span className="content">{infodata.partyBranchName}</span></div>
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title={<div className="my_branch_card">
                                    <span className="title_line" />
                                    <span className="card_title">基本情况</span>
                                </div>}
                            />
                            <Card.Body>
                               {infodata.branchSituation}
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
                                支部书记：{infodata.branchSecretary}<br/>
                                支部副书记：{infodata.branchDeputySecretary}<br/>
                                组织委员：{infodata.organizingCommittee}<br/>
                                纪检委员：{infodata.dicommittee}<br/>
                                宣传委员：{infodata.publicityCommittee}<br/>
                            </Card.Body>
                        </Card>
                            </div>
                        :
                            <NoData/>
                        }
                
            </div>
        );
    }
}
const mapStateToProps = (state,ownprops)=>{
    console.log('@@@state',state)
    return{
        partyBranchId:state.partyBranchId
    }
}
const reduxzbinfo= withRouter(Zbinfo);
export default connect(mapStateToProps, null)(reduxzbinfo);
