import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
import './style/index.less';
import { Tabs, WhiteSpace ,Badge} from 'antd-mobile';
// import ConmonCard from '../../components/conmonCard';
import List from './list';
import plane from '../../../assets/data/培训计划.json';
import info from '../../../assets/data/培训资料.json';
import talk from '../../../assets/data/经验交流.json';
const datasource=[
    {
      title:"我要报名",
      path:"/iwapply"  
    },
    {
        title:"我要请假",
        path:"/iwleave"
    },
    {
        title:"我要查询",
        path:"/iwsearch"
    },
    {
        title:"校历",
        path:"/schooldate"
    }
]
const tabs = [
    { title: "培训计划",key:"tab1" },
    { title: "培训资料" ,key:"tab2"},
    { title: "培训交流" ,key:"tab3"},
  ];

class index extends Component {
    constructor(props) {
        console.log('@@@222')
        super(props)
        this.state={
            data:plane,
            tabs:"tab1",
        }
    }
    
    tabsOnchange=(tab,index)=>{
        switch(tab.title){
            case "培训计划":
                this.setState({data:plane,tabs:"tab1"});
                break;
            case "培训资料":
                this.setState({data:info,tabs:"tab2"});
                break;
            case "培训交流":
                this.setState({data:talk,tabs:"tab3"});
                break;
            default:
                this.setState({data:[]})
                break;
        }
    }
    render() {
        console.log('@@@@@render')
        return (
            <div className="eduTrain">
                <div className="eduTrain_topbar">
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
                     教育培训</div>
                    {/* <div className="eduTrain_entry">
                    </div> */}
                    <Tabs tabs={tabs}
                    initialPage={"tab1"}
                    page={this.state.tabs}
                    tabBarUnderlineStyle={{borderColor:"#F83A2E"}}
                    tabBarActiveTextColor={"#F83A2E"}
                    onChange={this.tabsOnchange}
                    // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                </Tabs>
                <WhiteSpace size="lg"/>
                <List data={this.state.data}/>
            </div>
        );
    }
}

export default withRouter(index);