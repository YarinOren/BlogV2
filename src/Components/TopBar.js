  
import React from 'react';
import "../Styles/TopBar.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function TopBar() {
    return (
        <header>
            <div className="top-bar">
                <div>
                    <Link to="/">Home</Link>
                    <span className="vertical-line"> | </span>
                    <Link to="/about">About Me</Link>
                    <span className="vertical-line"> | </span>
                    <Link to="/contact">Contact Me</Link>
                    <span className="vertical-line"> | </span>
                    <Link to="/newpost">New Post</Link>
                </div>
                <a href="" className="right-positioned">Login</a>
            </div>
        </header>
    );
}

export default TopBar;