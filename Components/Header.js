import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobalContext } from "./Context";

function Header({ cart }) {
  const { cart1, setCart1 } = useGlobalContext();
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState(false);

  const router = useRouter();

  const checkToken = () => {
    const tokenData = localStorage.getItem("Token");
    if (tokenData) {
      setToken(true);
    }
  };

  useEffect(() => {
    const dataSum = localStorage.getItem("items");
    setCart1(dataSum);
    checkToken();
  }, [setCart1]);

  const clearToken = () => {
    localStorage.removeItem("Token");
    router.push("/Login");
    setToken(false);
  };

  return (     
    <div className="header-container">
      {/* Add padding to the bottom component */}
      <div className="bottom-component" style={{ paddingBottom: "90px" }}>
        {/* Your bottom component code goes here */}
      </div>

      <Navbar expand="lg" id="navbar" className="w-100">
        <Container fluid>
          <Navbar.Brand href="/" className="logo">
            <img src="/images/logo.png" alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center" style={{ marginLeft: '-20px' }}>
              <Link href="/" className="nav-link">HOME</Link>
              <Link href="/About" className="nav-link">OUR VISION</Link>
              <Link href="/Aboutdr" className="nav-link">OUR TEAM</Link>
              <Link href="/Products" className="nav-link">PRODUCTS</Link>
              <Link href="/Gallery" className="nav-link">GALLERY</Link>
              <Link href="/Blogs" className="nav-link">BLOGS</Link>
              <Link href="/Contactus" className="nav-link">CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
