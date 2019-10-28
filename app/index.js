import React from 'react';
import './less/index.less';
import { withRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import {
    Home, Login, Server,
    Message, My, Detail,
    Mybranch, Telbooks,
    Zbinfo, Volunteer, Lndx,
    Zbactive, Zbdetail, Myactive,
    EduTrain, Ztjs,Apply,
    SchoolDate,Volunteerbaodao,Lnb,
    Yszd,Ycjp,Dzfwt,
    Shgc,ComonList,
    Resetpwd,Suggest,
    About,Help
} from './pages';
import Lottie from './components/lottie';
const App = ({ history, location }) => {
    const router = {
        '': <Login />,
        'home': <Home />,
        'login': <Login />,
        'server': <Server />,
        'message': <Message />,
        'my': <My />,
        'detail': <Detail />,
        'lot': <Lottie />,
        'tel': <Telbooks />,
        'mybranch': <Mybranch />,
        'zbinfo': <Zbinfo />,
        'zbactive': <Zbactive />,
        'volunteer': <Volunteer />,
        'lndx': <Lndx />,
        'zbdetail': <Zbdetail />,
        'myactive': <Myactive />,
        'eduTrain': <EduTrain />,
        'ztjs': <Ztjs />,
        'iwapply':<Apply path="Reg" title="报名"/>,
        'iwleave':<Apply path="leave" title="请假"/>,
        'iwsearch':<Apply path="sech" title="查询"/>,
        'schooldate':<SchoolDate/>,
        'zyzbd':<Volunteerbaodao/>,
        'lnb':<Lnb/>,
        'yszd':<Yszd/>,
        'ycjp':<Ycjp/>,
        'dzfwt':<Dzfwt/>,
        'shgc':<Shgc/>,
        'ldyzj':<ComonList title="老党员之家" branchtype="ldyzj"/>,
        'lgbdx':<ComonList title="老干部党校" branchtype="lgbdx"/>,
        'hsjd':<ComonList title="红色基地" branchtype="hsjd"/>,
        'resetpwd':<Resetpwd/>,
        'suggest':<Suggest/>,
        'about':<About/>,
        'help':<Help/>
    }
    const { pathname } = location;
    const path = pathname.split('/')[1];
    return router[path] || <NotFound />
}
export default withRouter(App);
