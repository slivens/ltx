import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import {withRouter} from 'react-router-dom';
import Listview from '../../../components/homeListView';
import volunteerdata from '../../../../assets/data/health.json';
class index extends Component {
    render() {
        return (
            <div className="yszd">
                <div className="yszd_topbar">
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
                    养生之道</div>
                    <div className="yszd_entry">
                    <Listview data={volunteerdata}/>
                    </div>
            </div>
        );
    }
}

export default withRouter(index);