import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import ConmonCard from '../../components/conmonCard';
const datasource=[
    {
      title:"养生之道",
      path:"/yszd",
      pic:"yszd.png"  
    },
    {
        title:"史海钩沉",
        path:"/shgc",
        pic:"shgc.png"
    },
    {
        title:"原创精品",
        path:"/ycjp",
        pic:"ycjp.png"
    },
    {
        title:"读者服务台",
        path:"/dzfwt",
        pic:"dzfwpt.png"
    }
]
class index extends Component {
    gowhere=(path)=>{
        this.props.history.push(path)
    }
    render() {
        return (
            <div className="lnb">
                <div className="lnb_topbar">
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
                    老年报</div>
                    <div className="lnb_entry">
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