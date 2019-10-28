import React, { Component } from 'react';

export default React.forwardRef( (props,ref) =>{
    console.log('@@@@props',props)
    return(
        <button ref={ref}>
        {props.children}
        </button>
    )
})

