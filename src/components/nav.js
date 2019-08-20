import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const NavLink = styled(Link)({            
    color: `white`,
    textDecoration: `none`,
})

const NavBar = styled.h6({
    color: `white`,
    textDecoration: `none`,
})

const Nav = () => (
    <NavBar>        
        <NavLink to = "/page-2/" >Page 2</NavLink>
        &nbsp;|&nbsp;
        <NavLink to = "projects">Projects</NavLink>
        &nbsp;|&nbsp;
        <NavLink to = "blog">Blog</NavLink>
    </NavBar>
)

export default Nav