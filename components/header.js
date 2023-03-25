import React from "react";
import {
  HeaderWrap,
  HeaderContainer,
  Logo,
  LogoName,
  HeaderFlex,
  HeaderLinks,
  HeaderLink,
} from "../styles/components/header";
import Toggle from "./toggle";
import Link from "next/link";
import Menu from "./menu";

function Header({ theme, toggleTheme }) {
  return (
    <HeaderWrap>
      <div className="container">
        <HeaderContainer>
          <Link href="/" passHref>
            <a>
              <Logo>
                <svg
                  width="44"
                  height="23"
                  viewBox="0 0 64 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M42.5191 42.5821C54.2778 42.5821 63.8102 33.0498 63.8102 21.2911C63.8102 9.53233 54.2778 0 42.5191 0C30.7604 0 21.228 9.53233 21.228 21.2911C21.228 33.0498 30.7604 42.5821 42.5191 42.5821Z"
                      fill="#0050ff"
                    />
                    <path
                      d="M21.2911 42.5821C33.0498 42.5821 42.5821 33.0498 42.5821 21.2911C42.5821 9.53233 33.0498 0 21.2911 0C9.53234 0 0 9.53233 0 21.2911C0 33.0498 9.53234 42.5821 21.2911 42.5821Z"
                      fill="#F7F7F7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.9055 2.83057C38.2865 6.50738 42.5823 13.3977 42.5823 21.2911C42.5823 29.1845 38.2865 36.0748 31.9055 39.7516C25.5238 36.0752 21.228 29.1849 21.228 21.2911C21.228 13.4129 25.507 6.5339 31.8677 2.85163L31.9055 2.83057Z"
                      fill="#96E6FE"
                    />
                  </g>
                </svg>
                <LogoName>Reactify</LogoName>
              </Logo>
            </a>
          </Link>
          <HeaderFlex>
            <HeaderLinks>
              <HeaderLink>
                <Link href="/design">Design</Link>
              </HeaderLink>
              <HeaderLink>
                <Link href="/data">Data</Link>
              </HeaderLink>
              <HeaderLink>
                <Link href="/apis">APIs</Link>
              </HeaderLink>
              <HeaderLink>
                <Link href="/about">About</Link>
              </HeaderLink>
            </HeaderLinks>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <Menu />
          </HeaderFlex>
        </HeaderContainer>
      </div>
    </HeaderWrap>
  );
}

export default Header;
