import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './less/index.less';
import LoginInput from '../../components/loginInput';
import Divider from 'antd/es/divider';
import 'antd/es/divider/style';
import {withRouter} from 'react-router-dom';
const prefix="ltx_login";
class index extends Component {
    handleLogin=()=>{
        this.props.history.push('/home');
    }
    render() {
        return (
            <div className={prefix}>
                {/* <img src={login_bg}/> */}
                <div className={prefix+'-card'}>
                    <div className={prefix+'-card-avatar'}/>
                    <span className={prefix+'-card-title'}></span>
                    {/* <Icon type="mima" style={{fontSize:"20px"}}/> */}
                    <LoginInput type="user" icon="user"/>
                    <LoginInput type="password" icon="lock"/>
                    <Button onClick={this.handleLogin} type="warning" className="login_btn">登录</Button>
                    <div className={prefix+"_pwd"}>
                        <span>忘记密码</span>
                        <Divider style={{background:"#5f5d5b"}} type="vertical" />
                        <span>现在注册</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(index);