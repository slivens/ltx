import React, { Component } from 'react';
import {Flex,w} from 'antd-mobile';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style';

export default ()=> {
    return(
        <div className="zbtj">
            <Flex style={{height:"100%",textAlign:"center"}} justify="between" align="center">
                <Flex.Item>
                    最新发布&nbsp;<Icon type="caret-down" theme="filled" />
                </Flex.Item>
                <Flex.Item>
                    活动状态&nbsp;<Icon type="caret-down" theme="filled" />
                </Flex.Item>
                <Flex.Item>
                    筛选&nbsp;<Icon type="filter" theme="filled" />
                </Flex.Item>
            </Flex>
        </div>
    )
}