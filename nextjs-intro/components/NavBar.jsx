import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="wrapper">
        <Link href={"/"}>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href={"/about"}>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(18, 8, 8, 0.3) 0px 30px 60px -30px;
          background-color: orange;
        }
        .wrapper {
          display: flex;
          gap: 10px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
