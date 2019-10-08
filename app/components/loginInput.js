import React, {
    Component
} from 'react';
import Input from 'antd/es/input';
import Icon from 'antd/es/icon';
import 'antd/es/input/style';
import 'antd/es/icon/style';
export default ({type,icon}) => {
    return (
        <div className="clslogin">
            <Input type={type} prefix={<Icon type={icon} style={{ fontSize:".24rem",color: '#ED0E36' }} />}/>
        </div>
    )
}