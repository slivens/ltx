import React, { Component } from 'react';
class test extends Component {
    render() {
        const {history,location,match}=this.props;
        console.log('@@@@@@test',match)
        return (
            <div>
                test
            </div>
        );
    }
}

export default test;