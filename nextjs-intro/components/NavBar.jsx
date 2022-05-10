import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav className="nav">
      <div className="wrapper">
        <Link href={"/"}>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href={"/about"}>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
