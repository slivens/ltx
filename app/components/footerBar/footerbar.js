import React, { Component } from 'react';
import './style/index.less';
// import Icon from 'antd/es/icon';
// import 'antd/es/icon/style';
import { Flex } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import Icon from '../icon';
class footerbar extends Component {
    gowhere=(key)=>{
        this.props.history.push(key)
    }
    render() {
        const {history,location} = this.props;
        const path = location.pathname.split('/')[1];
        return (
            <div className="footerbar">
                <Flex>
                   <Flex.Item onClick={()=>this.gowhere('/home')}>
                       <div className={path==="home"?"active":""} >
                       <Icon
                            className="footer_icon"
                            style={{color:"#b6b6b6",fontSize:".28rem"}} 
                            type="shouye" theme="filled"/>
                            <div className="footer_title">首页</div>
                       </div>
                    </Flex.Item>
                   <Flex.Item onClick={()=>this.gowhere('/tel')}>
                   <div className={path==="tel"?"active":""} >
                       <Icon
                            className="footer_icon"
                       style={{color:"#b6b6b6",fontSize:".28rem"}} 
                       type="tongxunlu" theme="filled"/>
                       <div className="footer_title">通讯录</div>
                       </div>
                    </Flex.Item>
                   <Flex.Item onClick={()=>this.gowhere('/message')}>
                   <div className={path==="message"?"active":""} >
                       <Icon
                            className="footer_icon"
                            style={{color:"#b6b6b6",fontSize:".28rem"}} 
                            type="xinxi" theme="filled"/>
                            <div className="footer_title">消息</div>
                            </div>
                    </Flex.Item>
                   <Flex.Item onClick={()=>this.gowhere('/my')}>
                   <div className={path==="my"?"active":""} >
                       <Icon
                            className="footer_icon"
                       style={{color:"#b6b6b6",fontSize:".28rem"}}
                        type="wode" />
                        <div className="footer_title">我的</div>
                        </div>
                    </Flex.Item>
                </Flex>
            </div>
        );
    }
}
export default withRouter(footerbar);