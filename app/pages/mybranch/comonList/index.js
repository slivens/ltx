import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import {withRouter} from 'react-router-dom';
import Listview from '../../../components/homeListView';
import ldyzj from '../../../../assets/data/老党员之家.json';
import lgbdx from '../../../../assets/data/老干部党校.json';
import hsjd from '../../../../assets/data/红色基地.json';
class index extends Component {
    switchData=()=>{
        const {branchtype} = this.props;
        switch(branchtype){
            case "ldyzj":
                return ldyzj;
            case "lgbdx":
                return lgbdx;
            case "hsjd":
                return hsjd;
            default:
                return [];

        }
    }
    render() {
        return (
            <div className="mybranch_list">
                <div className="mybranch_list_topbar">
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
                    <div className="mybranch_list_entry">
                    <Listview data={this.switchData()}/>
                    </div>
            </div>
        );
    }
}

export default withRouter(index);