import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobalContext } from "./Context";
// import Header from './Admin/Header';

function Header({ cart }) {
  const { cart1, setCart1 } = useGlobalContext();

  const router = useRouter();

  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState(false);

  const checkToken = () => {
    const tokenData = localStorage.getItem("Token");
    if (tokenData) {
      setToken(true);
    }
  };

  useEffect(() => {
    checkToken();
  });

  const clearToken = () => {
    localStorage.removeItem("Token");
    router.push("/Login");
    setToken(false);
  };

  return (
    <Navbar expand="lg" id="navbar">
      <Container>
        <Navbar.Brand href="/" className="logo">
          <img
            src="/images/Zeba_logo_1.png"
            alt="logo"
          />
          {/* <em><h1 >Zebdermm</h1></em> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/">HOME</Link>
            <NavDropdown title="ABOUT" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown1">
                <Link href="/About">About Clinic</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown1">
                <Link href="/Aboutdr">About Doctor</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link href="/Treatments">TREATMENTS</Link>
            <Link href="/Results">RESULTS</Link>
            <Link href="/Gallery">GALLERY</Link>
            <Link href="/Blogs">BLOGS</Link>
            <Link href="/Products">PRODUCTS</Link>
            <Link href="/Contactus">CONTACT US</Link>
            <NavDropdown title="MORE" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown1">
                <Link href="/Myprofile">My Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown1">
                <Link href="/Myorder">My Orders</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown1">
                <Link href="/Login" onClick={clearToken}>
                  {token ? "Logout" : "Login/SignUp"}
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item className="dropdown1">
                  <Link href="/Admin" onClick={() => setAdmin(true)}>
                    Admin
                  </Link>
                </NavDropdown.Item> */}
            </NavDropdown>
            <Link
              href="/Shoppingcart"
              className="cart"
              style={{ marginTop: "-0.1rem" }}
            >
              <FaCartPlus />
              {cart1 > 0 ? <span>{cart1}</span> : ""}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* )} */}
    </Navbar>
  );
}

export default Header;
