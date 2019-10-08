import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import ConmonCard from '../../components/conmonCard';
const datasource=[
    {
      title:"我要报名",
      path:"/iwapply",
      pic:"wybm.png"  
    },
    {
        title:"我要请假",
        path:"/iwleave",
        pic:"wyqj.png"
    },
    {
        title:"我要查询",
        path:"/iwsearch",
        pic:"wycx.png"
    },
    {
        title:"校历",
        path:"/schooldate",
        pic:"xl.png"
    }
]
class index extends Component {
    gowhere=(path)=>{
        this.props.history.push(path)
    }
    render() {
        return (
            <div className="volunteer">
                <div className="volunteer_topbar">
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
                    老年大学</div>
                    <div className="volunteer_entry">
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