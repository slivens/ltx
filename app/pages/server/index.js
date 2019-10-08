import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import FooterBar from '../../components/footerBar/footerbar';
import './style/index.less';
import Carditem from './cardList';
const datasorce = [
    {
        itemtile: "三会一课",
        pic: "server1.png"
    },
    {
        itemtile: "教育活动",
        pic: "server2.png"
    },
    {
        itemtile: "文体活动",
        pic: "server3.png"
    },
    {
        itemtile: "组织生活",
        pic: "server1.png"
    }, {
        itemtile: "外出活动",
        pic: "server2.png"
    }
]
class index extends Component {
    render() {
        return (
            <div className="ltx_server">
                <div className="ltx_server_topbar">
                    <span>服务</span>
                    <Icon style={{
                        position: "absolute",
                        right: ".1rem",
                        top: "50%",
                        color: "#F7F8F4",
                        fontSize: ".24rem",
                        transform: "translateY(-50%)"
                    }}
                        type="search"
                    />
                </div>
                <div className="ltx_server_body">
                <Carditem
                    title={"组织生活"}
                    data={datasorce}
                />
                <Carditem
                    title={"政治学习"}
                    data={datasorce}
                />
                <Carditem
                    title={"养老服务"}
                    data={datasorce}
                />
                <Carditem
                    title={"工作管理"}
                    data={datasorce}
                />
                </div>
                <FooterBar />
            </div>
        );
    }
}

export default index;