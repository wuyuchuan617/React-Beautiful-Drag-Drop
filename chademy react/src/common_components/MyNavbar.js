import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 把Nav.Link作為NavLink來使用 */}
            {/* 一定要加上exact，不然首頁會一直點亮(active) */}
            <Nav.Link as={NavLink} to="/" exact>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/todo">
              待辨事項
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              產品
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              登入/登出
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              註冊
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              會員資料
            </Nav.Link>
            <Nav.Link as={NavLink} to="/counter">
              Counter
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productlist">
              產品列表
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              購物車
            </Nav.Link>
            <Nav.Link as={NavLink} to="/counterredux">
              CounterRedux
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
