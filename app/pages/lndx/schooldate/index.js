import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
class index extends Component {
    render() {
        return (
            <div className="schooldate">
                <div className="schooldate_topbar">
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
                    校历</div>
                    <img src={require('../../../../assets/images/schooldate.png')}/>
            </div>
        );
    }
}

export default withRouter(index);