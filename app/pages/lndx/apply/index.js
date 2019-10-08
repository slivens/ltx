import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
class index extends Component {
    render() {
        return (
            <div className="lndx_apply">
                <div className="lndx_apply_topbar">
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
                    {this.props.title}</div>
                <iframe style={{
                    width:'100%',
                    height:"calc(100% - .6rem)"
                }} src={`http://fjlndx.lndxpt.com/lndxwx/lndxreg!to${this.props.path}.do?compCode=fjlndx`}/>
            </div>
        );
    }
}

export default withRouter(index);