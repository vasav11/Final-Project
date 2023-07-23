import React, { Component } from 'react';
import "./NavbarStyles.css";
import {components} from 'react';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';


class Navbar extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">Shiksha-Sage</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                  <i className={this.state.clicked ? "fa-solid fa-xmark":"fa-solid fa-bars"}></i>
                </div>
                <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <NavLink className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>{item.title}</NavLink>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}
export default Navbar;
