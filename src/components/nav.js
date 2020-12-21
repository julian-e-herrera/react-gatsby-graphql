import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Navs = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`
const NavLink = styled(Link)`
  color: #ffff;
  font-size: 1.6rem;
  fotn-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", san-serif;
  text-decoration: none;
  padding: 1rem;
  margin-rigth:1rem:
  &last-of-type{
    margin-rigth:0:
  }
  &.focusPage{
      border-bottom:2px solid #FFF
  }
`

const Nav = () => {
  return (
    <Navs>
      <NavLink to={"/"} activeClassName="focusPage">
        Home
      </NavLink>
      <NavLink to={"/about"} activeClassName="focusPage">
        About
      </NavLink>
    </Navs>
  )
}

export default Nav
