import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import ConmonCard from '../../components/conmonCard';
const datasource = [
    {
        title: "支部信息",
        path: "/zbinfo",
        pic:"zbxx.png"
    },
    {
        title: "支部活动",
        path: "/zbactive",
        pic:"zbhd.png"
    },
    {
        title: "老党员之家",
        path: "/ldyzj",
        pic:"ldyzj.png"
    },
    {
        title: "老干部党校",
        path: "/lgbdx",
        pic:"lgbdx.png"
    },
    {
        title: "红色基地",
        path: "/hsjd",
        pic:"hsjd.png"
    }
]
class index extends Component {
    gowhere=(path)=>{
            this.props.history.push(path)
    }
    render() {
        return (
            <div className="my_branch">
                <div className="my_branch_topbar">
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
                    我的支部</div>
                    <div className="my_branch_entry">
                {
                    datasource.map((item, index) =>
                    <ConmonCard
                        item={item}
                        key={index}
                        onClick={()=>this.gowhere(item.path)}
                    />
                    )
                }
                    </div>
            </div>
        );
    }
}

export default withRouter(index);