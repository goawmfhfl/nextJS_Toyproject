import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log("router:", router);
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" && "red" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" && "blue" }}>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
