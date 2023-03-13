import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import Header from './Admin/Header';

function Header({ cart }) {
  const router = useRouter();

  // const [cart, setCart] = useState(0);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState(false);

  const checkToken = () => {
    const tokenData = localStorage.getItem("Token");
    if (tokenData) {
      setToken(true);
    }
    // console.log(tokenData,"token")
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
      {/* {admin ? (
        <Navbar bg="light" expand="lg" id="navbar">
          <Container>
            <Navbar.Brand href="/Admin" className="logo">
              <img
                src="../images/962d11f0-560c-4146-92ec-f428adf650ed-removebg-preview.png"
                alt="logo"
              />
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
                  </div>
                </NavDropdown>
                <NavDropdown title="MORE" id="basic-nav-dropdown">
                  <NavDropdown.Item className="dropdown1">
                    <Link href="/Myprofile">My Profile</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown1">
                    <Link href="/Myprofile">Logout</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) */}
      {/* : */}
      {/* ( */}
      <Container>
        <Navbar.Brand href="/" className="logo">
          <img
            src="./images/962d11f0-560c-4146-92ec-f428adf650ed-removebg-preview.png"
            alt="logo"
          />
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
                <Link href="/Login" onClick={clearToken}>
                  {token ? "Logout" : "Login/SignUp"}
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item className="dropdown1">
                  <Link href="/Myorder">My Orders</Link>
                </NavDropdown.Item> */}
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
              {cart > 0 ? <span>{cart}</span> : ""}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* )} */}
    </Navbar>
  );
}

export default Header;
