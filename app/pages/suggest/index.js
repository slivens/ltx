import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { withRouter } from 'react-router-dom';
import { List, TextareaItem,Button,Toast } from 'antd-mobile';
class index extends Component {
    state={
        duggestContent:""
    }
    suggestcommit=()=>{
        if(this.state.duggestContent===''){

            return Toast.fail('提交内容不能为空。')
        }
        Toast.success('反馈成功，感谢您的意见。')
    }
    suggestblur=(value)=>{
        this.setState({duggestContent:value})
    }
    render() {
        return (
            <div className="suggest">
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
                    <div >意见反馈</div>
                </div>
                <List renderHeader={() => '反馈内容：'}>
                    <TextareaItem
                       placeholder="您的意见是对我们最大的支持。"
                        rows={5}
                        count={200}
                        onBlur={this.suggestblur}
                    />
                </List>
                <Button className="login_btn" onClick={this.suggestcommit}>提交</Button>
            </div>
        );
    }
}

export default withRouter(index);