import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { saveAs } from "file-saver";
import {
  MenuIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  HomeLogo,
  NavBtnLink,
} from "./NavbarElements";
import dotenv from "dotenv";
dotenv.config();

const Navbar = ({ toggle }) => {
  // const fileId = "1Q9NgQvpGtOsnwCxNkvuzsb8XhkoRwG_j"; // your file ID

  // const downloadFile = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3001/api/download");
  //     console.log(response.data); // 'File is being downloaded on the server'
  //   } catch (e) {
  //     console.error("Download failed: ", e);
  //   }
  // };
  const handleDownload = async () => {
    let res = await fetch(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/download`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (res.ok) {
      const filename = res.headers.get("X-Suggested-Filename");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); //afterwards we remove the element again
    }
  };
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <HomeLogo src="/image/logo.png" />
            </NavLogo>
            <MenuIcon onClick={toggle}>
              <FaBars />
            </MenuIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  href={`${process.env.REACT_APP_ADDRESS}/`}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  href={`${process.env.REACT_APP_ADDRESS}/about`}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  href={`${process.env.REACT_APP_ADDRESS}/contact`}
                >
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  href={`${process.env.REACT_APP_ADDRESS}/license`}
                >
                  License
                </NavLink>
              </NavItem>
            </NavMenu>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NavBtnLink
                style={{ height: "60%" }}
                onClick={handleDownload}
                rel="noreferrer"
              >
                Download File
              </NavBtnLink>
            </div>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
