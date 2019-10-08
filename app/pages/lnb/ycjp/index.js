import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import {withRouter} from 'react-router-dom';
import Listview from '../../../components/homeListView';
import volunteerdata from '../../../../assets/data/original.json';
class index extends Component {
    render() {
        return (
            <div className="ycjp">
                <div className="ycjp_topbar">
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
                    原创精品</div>
                    <div className="ycjp_entry">
                    <Listview data={volunteerdata}/>
                    </div>
            </div>
        );
    }
}

export default withRouter(index);