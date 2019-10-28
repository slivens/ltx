import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './less/index.less';
import LoginInput from '../../components/loginInput';
import Divider from 'antd/es/divider';
import 'antd/es/divider/style';
import { withRouter } from 'react-router-dom';
import Form from 'antd/es/form';
import 'antd/es/form/style';
const prefix = "ltx_login";
import axios from 'axios';
import { Toast } from 'antd-mobile';
import { AddUserInfo } from '../../redux/actions';
import { connect } from 'react-redux';
import commonUrl from '../../config';

class Logincomp extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
   
    handleLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post(`${commonUrl}/app/appLogin.do`, { username: values.username, password: values.password })
                    .then(res => {
                        if (res.data.code === "success") {
                            clearTimeout(this.timer)
                            this.props.handleUserinfo(res.data.data);
                            // document.cookie = `username=${values.username}; path=/`;
                            // document.cookie = `password=${values.password}; path=/`;
                            if(typeof(Storage)!=='undefined'){
                                localStorage.setItem('username',values.username);
                                localStorage.setItem('password',values.password);
                            }
                            localStorage.setItem('loginState','online');
                            Toast.success('登录成功', 1, () => this.timer = setTimeout(this.props.history.push('/home'), 2000));

                        } else {
                            Toast.fail(`登录失败：${res.data.message}`, 2)
                        }
                    })
            }
        });
    }
    componentWillMount() {
        if(localStorage.getItem('loginState')==='loginout'){
            return
        }
        if(localStorage.getItem('username')){
            axios.post(`${commonUrl}/app/appLogin.do`, { username: localStorage.getItem('username'), password: localStorage.getItem('password') })
                        .then(res => {
                            if (res.data.code === "success") {
                                this.props.handleUserinfo(res.data.data);
                                this.props.history.push('/home');
                            } else {
                                Toast.fail(`登录失败：${res.data.message}`, 2)
                            }
                        })
        }
    }
    forgetpwd = () => {
        this.props.history.push('/resetpwd');
    }
    render() {
        const { username_err, pssword_err } = this.state;
        const { getFieldDecorator } = this.props.form;
        //此段cookie设置在Hbuilder失效 不支持。
        // let obj={};
        // if (document.cookie) {
        //     const arr = document.cookie.split(';');
        //     console.log(arr)
        //     for (let item of arr) {
        //         const values = item.trim().split('=');
        //         obj[values[0]] = values[1].trim();
        //     }

        // }
        // let initusername, initpwd;
        // if ('username' in obj) initusername = obj.username;
        // else initusername = '';
        // if ('password' in obj) initpwd = obj.password;
        // else initpwd = '';
        const initusername=localStorage.getItem('username')||'';
        const initpwd=localStorage.getItem('password')||'';
        return (
            <div className={prefix}>
                {/* <img src={login_bg}/> */}
                {
                    !localStorage.getItem('loginState')||localStorage.getItem('loginState')!=='online'?
                <Form>
                    <div className={prefix + '-card'}>
                        <div className={prefix + '-card-avatar'} />
                        <span className={prefix + '-card-title'}></span>
                        {/* <Icon type="mima" style={{fontSize:"20px"}}/> */}
                        <Form.Item>
                            {getFieldDecorator('username', {
                                initialValue: initusername,
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <LoginInput placeholder="请输入身份证号码" type="user" icon="user" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                initialValue: initpwd,
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <LoginInput type="password" icon="lock" />
                            )}
                        </Form.Item>
                        <Button onClick={this.handleLogin} type="warning" className="login_btn">登录</Button>
                        {/* <div className={prefix + "_pwd"}>
                            <span onClick={this.forgetpwd}>修改密码</span>
                            <Divider style={{ background: "#5f5d5b" }} type="vertical" />
                            <span>现在注册</span>
                        </div> */}
                    </div>
                </Form>
                :
                <div></div>
                }
            </div>
        );
    }
}
const mapStateToProps = (state, ownprops) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, ownprops) => {
    return {
        handleUserinfo: (info) => {
            dispatch(AddUserInfo(info))
        }
    }
}
const reduxLogin = withRouter(Form.create({ name: 'normal_login' })(Logincomp));
export default connect(mapStateToProps, mapDispatchToProps)(reduxLogin);
