import React, { Component, useState, useEffect } from 'react';
import './style/index.less';
import { Link, withRouter } from 'react-router-dom';
const NavBar = ({ history, location, match, className }) => {
    console.log('@@@@@@@', location, match)
    const [active, setAcitve] = useState('hotnews')

    return (
        <div className="nav_bar">
            <Link onClick={() => setAcitve("hotnews")} className={active === "hotnews" ? "active" : ""} to="/home">热点新闻<span/></Link>
            <Link onClick={() => setAcitve("province")} className={active === "province" ? "active" : ""} to="/home">省直动态<span/></Link>
            <Link onClick={() => setAcitve("town")} className={active === "town" ? "active" : ""} to="/home">市县动态<span/></Link>
            <Link onClick={() => setAcitve("nowPolitics")} className={active === "nowPolitics" ? "active" : ""} to="/home">时政动态<span/></Link>
            <Link onClick={() => setAcitve("qita")} className={active === "qita" ? "active" : ""} to="/home">其他动态<span/></Link>
        </div>
    )
}
export default withRouter(NavBar);