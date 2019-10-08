import React from 'react';
export default ({type,style}) => {
    const useTag = `<use xlink:href="#icon${type}"></use>`;
    return <svg style={{...style}} className="icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: useTag }} />;
}