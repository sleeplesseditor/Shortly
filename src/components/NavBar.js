import React, { Component } from 'react';
import { Navbar, NavItem}  from 'react-materialize';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar fixed brand='Shortly' right style={{ paddingLeft: "10px" }}>
                    <NavItem href='login'>Log In</NavItem>
                    <NavItem href='signup'>Sign Up</NavItem>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;