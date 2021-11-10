import React from "react";
import { FooterContainer, Copyright } from "../styles/components/footer";

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <Copyright>
          © {new Date().getFullYear()} Dot Directory
        </Copyright>
        <Copyright>
          Web development and design:
          <a
            href="https://nenadmarinkovic.com"
            target="_blank"
            rel="noreferrer"
          >
            Nenad Marinković
          </a>
        </Copyright>
      </div>
    </FooterContainer>
  );
}

export default Footer;
