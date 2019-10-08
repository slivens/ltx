import React, { Component } from 'react';
import FooterBar from '../../components/footerBar/footerbar';
import { SegmentedControl, WingBlank } from 'antd-mobile';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import List from './list';
const data=[
    {   
        title:"系统通知",
        content:"您提交的预约要求我们已确定",
        count:3,
        date:"2019-02-13"
    },
    {   
        title:"活动通知",
        content:"您有活动信息待确定",
        count:2,
        date:"2019-02-13"
    },
    {   
        title:"志愿服务消息",
        content:"ok，稍后再说",
        count:5,
        date:"2019-02-13"
    }
]
class index extends Component {
    render() {
        return (
            <div className="mesg">
                <div className="mesg_topbar">
                    <span>消息</span>
                    <Icon style={{
                        position:"absolute",
                        right:".1rem",
                        top:"50%",
                        color:"#F7F8F4",
                        fontSize:".24rem",
                        transform: "translateY(-50%)"
                    }} 
                    type="search"
                    />
                </div>
                {/* <div className="mesg_select">
                <SegmentedControl
                    values={['消息', '联系人']}
                    tintColor={'#ff0000'} 
                />
                </div> */}
                <List>
                    {
                        data.map(
                            (item,key)=><List.Item key={key} {...item}/>
                            )
                    }
                </List>
                <FooterBar />
            </div>
        );
    }
}

export default index;