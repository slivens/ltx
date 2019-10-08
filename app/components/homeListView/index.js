import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import './style/index.less';
import Row from 'antd/es/row';
import 'antd/es/row/style';
import Col from 'antd/es/col';
import 'antd/es/col/style';
import {withRouter} from 'react-router-dom';
import dataSource from '../../../assets/data/homedata.json';
// const dataSource=[
// {
//     title:'省领导走访看望老同志',
//     content:"访看望老同志省领导走访看望老同志访看望老同志",
// }
// ]
class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            items:props.data,
            hasMore: true
        }
    }
    componentWillReceiveProps(nextprops){
        console.log('@@@@@@nextprops',nextprops)
        this.setState({items:nextprops.data})
    }
    fetchMoreData = () => {
        if (this.state.items.length >= 40) {
            this.setState({ hasMore: false });
            return;
        }
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(dataSource)
            });
        }, 500);
    };
    godetail=(id)=>{
        this.props.history.push(`/detail/${id}`)
    }
    returnstr=(content)=>{
         return content.replace(/\&nbsp;|\<br\/\>/g,"")
    }
    render() {
        console.log('@@@@@@this.state.items',this.state.items)
        return (
            <div className="homeListView">
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={this.state.hasMore}
                loader={<h4 style={{fontSize:".14rem",textAlign:'center'}}>加载中...</h4>}
                height={"100%"}
                endMessage={
                    <p style={{fontSize:".14rem",textAlign: "center" }}>
                        <b>数据已加载完毕</b>
                    </p>
                }
            >    
            {this.state.items.map((item, index) => (
                <div onClick={()=>this.godetail(item.id)} key ={index} className="homeListView_item">
                    <div className="homeListView_item_pic">
                        <img src={require(`../../../assets/images/${item.pic}`)}/>
                    </div>
                    <div className="homeListView_item_right">
                        <div className="homeListView_item_right-top">
                        <div className="title">{item.title}</div>
                        <div 
                        dangerouslySetInnerHTML={{__html:this.returnstr(item.content)}}
                        className="content"></div>
                        </div>
                        <div className="homeListView_item_right-bottom">
                            <span className="date">2019-01-18</span>
                            <span className="count">1002&nbsp;阅读</span>
                        </div>
                    </div>
                </div>
          ))}
            </InfiniteScroll>
            </div>
        );
    }
}

export default withRouter(index);