import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="wrapper">{children}</div>
    </>
  );
};

export default Layout;
