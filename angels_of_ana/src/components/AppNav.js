import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import page from '../data/pages.json'
import "./AppNav.css"

function AppNav(props) {
  const [navItems, setNavItems] = useState(page)

  // router props
  const navigate = useNavigate()

// handlers
const handleNavClick = (page) => {
  if (page === 'home') {
    navigate(`/`)
  }
  else if (page === 'login') {
    navigate('/login')
  }
  else {
    navigate(`/pages/${page}`)
  }
}


//render
  return (
    <Navbar className="bar" style={{display: 'flex', flexDirection: 'row', color: 'white', borderWidth: '5px', borderColor: 'white', fontColor: 'white'}}>
      <Nav>
      {
        navItems.map((navItem, index) => {
          return (
            <Nav.Link key={index} onClick={() => handleNavClick(navItem.value)}>
                { navItem.label }
            </Nav.Link>
          )
        })
      }
      </Nav>
    </Navbar>
  )
}

export default AppNav;

