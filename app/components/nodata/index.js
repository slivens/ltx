import React, { Component } from 'react';
import './style/index.less';
class index extends Component {
    render() {
        return (
            <div className="nodata">
                <img src={require('../../../assets/images/nodata.png')}/>
                <div style={{
                    fontSize:"16px",
                    textAlign:"center",
                    color:"#a3a6a8"
                }}>暂无数据,小憩一会~</div>
            </div>
        );
    }
}

export default index;