import React, { Component } from 'react';
import FooterBar from '../../components/footerBar/footerbar';
import './style/index.less';
import Avatar from 'antd/es/avatar';
import 'antd/es/avatar/style';
import { Badge,Button,WhiteSpace } from 'antd-mobile';
import List from '../../components/List';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
class Mycomp extends Component {
    forgetpwd=()=>{
        this.props.history.push('/resetpwd');
    }
    loginout=()=>{
        localStorage.setItem("loginState","loginout");
        localStorage.removeItem("password");
        this.props.history.push('/login');
    }
    render() {
        const {userinfo} =this.props;
        console.log('@@@@user',userinfo)
        return (
            <div className="my">
                <div className="my_info">
                    <Avatar style={{marginLeft:".2rem"}} size={64} icon="user" />
                    <div className="my_info-content">
                        <div><span>{userinfo.realName}</span>
                        {/* <Badge text="离休" hot style={{ background:"#F19736",marginLeft: 12 }} /> */}
                        </div>
                        <div><span>{userinfo.unitName}</span>&nbsp;&nbsp;
                        {/* <span>主任</span> */}
                        </div>
                    </div>
                </div>
                    {/* <List>
                        <List.Item type="user" onClick={()=>this.props.history.push('/mybranch')}>我的支部</List.Item>
                    </List> */}
                    {/* <WhiteSpace size="xl"/> */}
                    <List>
                        <List.Item onClick={this.forgetpwd} type="user">修改密码</List.Item>
                        <List.Item onClick={()=>this.props.history.push('/suggest')} type="user">意见反馈</List.Item>
                    </List>
                    <WhiteSpace size="xl"/>
                    <List>
                        <List.Item onClick={()=>this.props.history.push('/about')} type="user">关于</List.Item>
                        <List.Item onClick={()=>this.props.history.push('/help')} type="user">帮助</List.Item>
                    </List>
                    <WhiteSpace size="xl"/>
                    <Button onClick={this.loginout}>退出登录</Button>
                <FooterBar/>
            </div>
        );
    }
}
const mapStateToProps=(state,ownprops)=>{
return {
    userinfo:state
}
}

const reduxMy = withRouter(Mycomp)
export default connect(mapStateToProps, null)(reduxMy);