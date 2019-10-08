import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import {withRouter} from 'react-router-dom';
class index extends Component {
    render() {
        return (
            <div className="volunteer_tell">
                <div className="volunteer_tell_topbar">
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
                    总体介绍</div>
                <div style={{
                    padding:".2rem",
                    fontSize:".18rem"
                }}>
                    <b>2018年老同志志愿服务队总体情况</b><br/>
                      5月份志愿服务活动启动以来，截止11月底，全省各地各单位共组建老同志志愿服务队538支，成员14005名。<br/>

                    福州市：共有21支队伍，1032名成员；<br/>

                    厦门市：共有68支队伍，2021名成员；<br/>

                    泉州市：共有139支队伍，共2852名成员；<br/>

                    漳州市：共有64支队伍，共1280名成员；<br/>

                    莆田市：共有19支队伍，785名成员；<br/>

                    三明市：共有63支队伍，1490名成员；<br/>

                    龙岩市：共有51支队伍，1229名成员；<br/>

                    南平市：共有42支队伍，1161名成员；<br/>

                    宁德市：共有44支队伍，1308名成员；<br/>

                    平  潭：共有5支队伍，298名成员；<br/>

                    省直单位：共有22支队伍，549名成员。<br/>
                    </div>
            </div>
        );
    }
}

export default withRouter(index);