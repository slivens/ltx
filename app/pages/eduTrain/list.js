import React, { Component } from 'react';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import InfiniteScroll from "react-infinite-scroll-component";
import {withRouter} from 'react-router-dom';
class list extends Component {
    state = {
        items: Array.from({length:20}),
        hasMore: true
    }
    fetchMoreData = () => {
        if (this.state.items.length >= 40) {
            this.setState({ hasMore: false });
            return;
        }
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({length:10}))
            });
        }, 500);
    };
    godetail=(id)=>{
        this.props.history.push(`/detail/${id}`)
    }
    render() {
        return (
            <div className="eduTrain_entry">
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={this.state.hasMore}
                loader={<h4 style={{ fontSize: ".14rem", textAlign: 'center' }}>加载中...</h4>}
                height={"100%"}
                endMessage={
                    <p style={{ fontSize: ".14rem", textAlign: "center" }}>
                        <b>数据已加载完毕</b>
                    </p>
                }
            >
                {this.props.data.map((item, index) => (
                    <div onClick={()=>this.godetail(item.id)} key={index} className="eduTrain_list">
                        <div className="eduTrain_list_pic">
                            <img src={require(`../../../assets/images/${item.pic}`)} />
                        </div>
                        <div className="eduTrain_list_right">
                            <div className="eduTrain_list_right-top">
                                <div className="title">{item.title}</div>
                                <div dangerouslySetInnerHTML={{__html:item.content}} className="content"></div>
                            </div>
                            <div className="eduTrain_list_right-bottom">
                                <span className="date"><Icon type="user" />&nbsp;11203人学习</span>
                                <span className="count"><Icon type="book" />&nbsp;6课时</span>
                            </div>
                        </div>
                    </div>
                ))}
            </InfiniteScroll>
            </div>
        );
    }
}

export default withRouter(list);