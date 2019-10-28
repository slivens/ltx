import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import ConmonCard from '../../components/conmonCard';
import TestButton from './testComp';
const datasource=[
    {
      title:"总体介绍",
      path:"/ztjs",
      pic:"ztjs.png"  
    },
    {
        title:"志愿者报道",
        path:"/zyzbd",
        pic:"zyzbd.png"
    }
]
class index extends Component {
    constructor(props){
        super(props)
        this.refbtn=React.createRef();
    }
    
    gowhere=(path)=>{
        this.props.history.push(path)
    }
    componentDidMount() {
        console.log('@@@@@ref',this.refbtn.current)
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
                    志愿者</div>
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
                <TestButton ref={this.refbtn}>提交</TestButton>
            </div>
        );
    }
}

export default withRouter(index);