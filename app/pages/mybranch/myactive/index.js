import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { Tabs, WhiteSpace ,Badge} from 'antd-mobile';
import List from '../zbactive/list';
const tabs = [
    { title: "我参加的",key:"tab1" },
    { title: "我发布的" ,key:"tab2"},
  ];
class index extends Component {
    render() {
        return (
            <div className="myactive">
                <div className="myactive_topbar">
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
                    我的活动
                    </div>
                <Tabs tabs={tabs}
                    initialPage={"tab1"}
                    tabBarUnderlineStyle={{borderColor:"#F83A2E"}}
                    tabBarActiveTextColor={"#F83A2E"}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                </Tabs>
                <WhiteSpace size="lg"/>
                <List/>
            </div>
        );
    }
}

export default withRouter(index);