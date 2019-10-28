import React, { Component } from 'react';
import FooterBar from '../../components/footerBar/footerbar';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';
const prefix = "ltx_home";
import './style/index.less';
import NoticeBar from '../../components/noticeBar';
import Banner from '../../components/banner';
import ListView from '../../components/homeListView';
import homedata from '../../../assets/data/homedata.json';
import provinceNews from '../../../assets/data/provinceNews.json';
import countyNews from '../../../assets/data/countyNews.json';
import { Tabs, WhiteSpace ,Badge} from 'antd-mobile';
const notice_data = [
    {
        title: "党建先锋",
        pic: "djxf.png",
        path: "/mybranch"
    },
    {
        title: "学习教育",
        pic: "xxjy.png",
        path: "/eduTrain"
    },
    {
        title: "志愿者",
        pic: "zyz.png",
        path: "/volunteer"
    },
    {
        title: "老年大学",
        pic: "lndx.png",
        path: "/lndx"
    },
    {
        title: "老年报",
        pic: "db.png",
        path: "/lnb"
    },
]
const tabs = [
    { title: "工作要闻",key:"tab1" },
    { title: "省直动态" ,key:"tab2"},
    { title: "市县动态" ,key:"tab3"},
  ];
class index extends Component {
    state={
        data:homedata
    }
    tabsOnchange=(tab,index)=>{
        switch(tab.title){
            case "工作要闻":
                this.setState({data:homedata});
                break;
            case "省直动态":
                this.setState({data:provinceNews});
                break;
            case "市县动态":
                this.setState({data:countyNews});
                break;
            default:
                this.setState({data:[]})
                break;
        }
    }
    render() {
        return (
            <div className={prefix}>
                <div className={prefix + '_topBar'}>
                    <span>首页</span>
                    <Icon style={{
                        position: "absolute",
                        right: ".1rem",
                        top: "50%",
                        color: "#F7F8F4",
                        fontSize: ".24rem",
                        transform: "translateY(-50%)"
                    }}
                        type="search"
                    />
                </div>
                {/* <NavBar/> */}
                <Banner />
                <NoticeBar data={notice_data} />
                <WhiteSpace/>
                <Tabs tabs={tabs}
                    initialPage={"tab1"}
                    tabBarUnderlineStyle={{borderColor:"#F83A2E"}}
                    tabBarActiveTextColor={"#F83A2E"}
                    onChange={this.tabsOnchange}
                    // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                </Tabs>
                <ListView data={this.state.data} />
                <FooterBar />
            </div>
        );
    }
}

export default index;