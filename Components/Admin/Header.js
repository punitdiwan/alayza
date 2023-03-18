import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import React, { useEffect,useState } from "react";
import {useRouter} from "next/router";
function Header() {
  
  // const [token1,setToken1] = useState()
  const router = useRouter()


  const clearToken = () => {
    localStorage.removeItem("Token");
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if(!token){
     router.push("/Login")
    }
    // setToken1(token)
  }, []);

  return (
    <Navbar bg="light" expand="lg" id="navbar">
      <Container>
        <Navbar.Brand href="/Admin/AdminProduct" className="logo">
          {/* <img
            src="../images/962d11f0-560c-4146-92ec-f428adf650ed-removebg-preview.png"
            alt="logo"
          /> */}
          <h1 style={{marginLeft: "-1rem",color: "#fff"}}>Zebdermm</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="ADMIN" id="basic-nav-dropdown">
              <div className="new-dropdown">
                <Link href="/Admin/Users" className="dropdown1">
                  Users
                </Link>
                <Link href="/Admin/AdminProduct" className="dropdown1">
                  Products
                </Link>
                <Link href="/Admin/Orders" className="dropdown1">
                  Orders
                </Link>
                <Link href="/Admin/appointments" className="dropdown1">
                  Appointments
                </Link>
              </div>
            </NavDropdown>
            <NavDropdown title="MORE" id="basic-nav-dropdown">
              {/* <NavDropdown.Item className="dropdown1">
                <Link href="/Myprofile">My Profile</Link>
              </NavDropdown.Item> */}
              <NavDropdown.Item className="dropdown1">
                <Link href="/Login" onClick={clearToken}>
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
