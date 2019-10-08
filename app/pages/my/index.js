import React, { Component } from 'react';
import FooterBar from '../../components/footerBar/footerbar';
import './style/index.less';
import Avatar from 'antd/es/avatar';
import 'antd/es/avatar/style';
import { Badge,Button,WhiteSpace } from 'antd-mobile';
import List from '../../components/List';
import {withRouter} from 'react-router-dom';
class index extends Component {
    render() {
        return (
            <div className="my">
                <div className="my_info">
                    <Avatar style={{marginLeft:".2rem"}} size={64} icon="user" />
                    <div className="my_info-content">
                        <div><span>Sliven</span><Badge text="离休" hot style={{ background:"#F19736",marginLeft: 12 }} /></div>
                        <div><span>福建省老干局</span>&nbsp;&nbsp;<span>主任</span></div>
                    </div>
                </div>
                    {/* <List>
                        <List.Item type="user" onClick={()=>this.props.history.push('/mybranch')}>我的支部</List.Item>
                    </List> */}
                    {/* <WhiteSpace size="xl"/> */}
                    <List>
                        <List.Item type="user">账号设置</List.Item>
                        <List.Item type="user">意见反馈</List.Item>
                    </List>
                    <WhiteSpace size="xl"/>
                    <List>
                        <List.Item type="user">关于</List.Item>
                        <List.Item type="user">帮助</List.Item>
                    </List>
                    <WhiteSpace size="xl"/>
                    <Button onClick={()=>this.props.history.push('/login')}>退出登录</Button>
                <FooterBar/>
            </div>
        );
    }
}

export default withRouter(index);