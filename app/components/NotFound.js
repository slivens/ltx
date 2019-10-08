import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';
class NotFound extends Component {
    render() {
        return (
            <div>
                <span>Not Found 404,&nbsp;&nbsp;</span>
                请返回<Link to="/home">首页</Link>
            </div>
        );
    }
}

export default withRouter(NotFound);