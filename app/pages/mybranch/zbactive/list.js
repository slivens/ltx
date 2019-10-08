import React, { Component } from 'react';
import {Badge} from 'antd-mobile';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import InfiniteScroll from "react-infinite-scroll-component";
import {withRouter} from 'react-router-dom';
import activeData from '../../../../assets/data/activitiy.json';
class list extends Component {
    state = {
        items: activeData,
        hasMore: true
    }
    fetchMoreData = () => {
        if (this.state.items.length >= 40) {
            this.setState({ hasMore: false });
            return;
        }
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(activeData)
            });
        }, 500);
    };
    godetail=(id)=>{
        this.props.history.push(`/detail/${id}`)
    }
    render() {
        return (
            <div className="zbactive_box">
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
               <div onClick={()=>this.props.history.push('/zbdetail')} key={index} className="zbactive_item">
               <div className="zbactive_item_left">
               <img src={require('../../../../assets/images/banner2.png')}/>
               </div>
               <div className="zbactive_item_right">
                   <div className="title">
                   <Badge text="进行中" style={{background:"#FFA310"}}/>
                   <span className="title_content">{item.title}</span>
                   </div>
                   <div className="date"><Icon type="clock-circle" />&nbsp;&nbsp;{item.date}</div> 
                   <div className="where"><Icon type="environment" />&nbsp;&nbsp;中共闽都社区委员会</div> 
               </div>
           </div>
          ))}
            </InfiniteScroll>
            </div>
        );
    }
}

export default withRouter(list);