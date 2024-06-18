import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
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
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/" className="logo">
            <img src="/images/logo.png" alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link href="/" className="nav-link me-3">HOME</Link>
              <Link href="/About" className="nav-link me-3">OUR VISION</Link>
              <Link href="/Aboutdr" className="nav-link me-3">OUR TEAM</Link>
              <Link href="/Products" className="nav-link me-3">PRODUCTS</Link>
              <Link href="/Gallery" className="nav-link me-3">GALLERY</Link>
              <Link href="/Blogs" className="nav-link me-3">BLOGS</Link>
              <Link href="/Contactus" className="nav-link">CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
