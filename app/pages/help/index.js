import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { withRouter } from 'react-router-dom';
import { SearchBar} from 'antd-mobile';
import List from '../../components/List';
class index extends Component {
    render() {
        return (
            <div className="ofenProblem">
                <div className="topbar">
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
                    <div >常见问题</div>
                </div>
                    <SearchBar placeholder="搜索..." maxLength={20} onChange={this.SearchChange}/>
                    <List>
                        <List.Item>如何使用离退休管理系统</List.Item>
                        <List.Item>出现系统错误怎么处理</List.Item>
                    </List>
                </div>
        );
    }
}

export default withRouter(index);