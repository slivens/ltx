import React, {
    Component
} from 'react';
import Input from 'antd/es/input';
import Icon from 'antd/es/icon';
import 'antd/es/input/style';
import 'antd/es/icon/style';
export default class LoginInput extends Component{
    render(){
        const {type,icon,onChange,value,placeholder} =this.props;
        return (
            <div className="clslogin">
            <Input
            onChange={(e)=>{onChange(e.target.value)}} 
            value={value} 
            type={type} 
            prefix={<Icon type={icon}
            placeholder={placeholder} 
            style={{ fontSize:".24rem",color: '#ED0E36' }} />}/>
        </div>
        )
    }
}