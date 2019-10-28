import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { withRouter } from 'react-router-dom';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import Form from 'antd/es/form';
import 'antd/es/form/style';
import { Button,Toast } from 'antd-mobile';
import axios from 'axios';
import {connect} from 'react-redux';
import commonUrl from '../../config';
class ResetPwdComp extends Component {
    constructor(props) {
        super(props);
    }
    resetpwd=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if(values.newPwd!==values.oncenewPwd){
                   return Toast.fail('两次输入的新密码不一致，请确认！',2)
                }
                axios.post(`${commonUrl}/app/updatePassword.do`,{
                    userId:this.props.userinfo.id,
                    oldPwd:values.oldPwd,
                    newPwd:values.newPwd
                }).then(res=>{
                    if(res.data.code==='success'){
                        Toast.success('密码修改成功！')
                    }else{
                        Toast.fail(`密码修改失败：${res.data.message}`)
                    }
                })
            }
        });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="resetpwd">
                <div className="topbar">
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
                    <div >修改密码</div>
                </div>
                <Form>
                    <Form.Item>
                    {getFieldDecorator('oldPwd', {
                                rules: [{ required: true, message: '请输入旧密码' }],
                            })(
                                <InputItem
                                type="password"
                                placeholder="****"
                            >旧密码</InputItem>
                            )}
                       
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('newPwd', {
                                rules: [{ required: true, message: '请输入新密码' }],
                            })(
                                <InputItem
                                type="password"
                                placeholder="****"
                            >新密码</InputItem>
                            )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('oncenewPwd', {
                                rules: [{ required: true, message: '请确认新密码' }],
                            })(
                                <InputItem
                                type="password"
                                placeholder="****"
                            >确认新密码</InputItem>
                            )}
                    </Form.Item>
                    <Button onClick={this.resetpwd} type="warning" className="login_btn">确认</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state,ownprops)=>{
    return{
        userinfo:state
    }
}
const reduxResetPwd = withRouter(Form.create({ name: 'resetpwd' })(ResetPwdComp));
export default connect(mapStateToProps, null)(reduxResetPwd);