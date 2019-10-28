import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { withRouter } from 'react-router-dom';
class index extends Component {
    render() {
        return (
            <div className="about">
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
                    <div >关于</div>
                </div>
                <div className="version_bg">
                <img src={require('../../../assets/images/logo.png')}/>
                </div>
                <div style={{textAlign:"center"}}>版本：v1.0.2</div>
                </div>
        );
    }
}

export default withRouter(index);