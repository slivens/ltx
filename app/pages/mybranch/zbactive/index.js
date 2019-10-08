import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import Zbtj from './zbtj';
import {withRouter} from 'react-router-dom';
import List from './list';
class zbactive extends Component {
    render() {
        return (
            <div className="zbactive">
                <div className="zbactive_topbar">
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
                    支部活动
                    <span
                    style={{
                        position: "absolute",
                        right: ".1rem",
                        top: "50%",
                        color: "#F7F8F4",
                        fontSize: ".18rem",
                        transform: "translateY(-50%)"
                    }} 
                    onClick={()=>this.props.history.push('/myactive')}
                    >我的</span>
                    </div>
                    <Zbtj/>
                    <div style={{height:".2rem"}}/>
                    <List/>
            </div>
        );
    }
}

export default withRouter(zbactive);