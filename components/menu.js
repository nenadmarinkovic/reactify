import React, { useState, useRef, useEffect } from "react";
import { StyledMenu, StyledBurger, MenuItem } from "../styles/components/menu";
import { useOnClickOutside } from "../hooks/outside";
import Link from "next/link";

const MenuComponent = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <MenuItem>
        <Link href="/design">
          <a aria-label="Design">Design</a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/data">
          <a aria-label="Data">Data</a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/apis">
          <a aria-label="APIs">APIs</a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about">
          <a aria-label="About">About</a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/contact">
          <a aria-label="Contact">Contact</a>
        </Link>
      </MenuItem>
    </StyledMenu>
  );
};

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen(!open);
      }}
      aria-label="Menu"
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

function Menu() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    window.onscroll = () => {
      setOpen(false);
    };
  }, []);

  return (
    <>
      <div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <MenuComponent open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
}

export default Menu;
