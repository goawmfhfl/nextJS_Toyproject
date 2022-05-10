import NavBar from "./NavBar";
// 모든 페이지에 기본으로 들어가는 파일

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="wrapper">{children}</div>
    </>
  );
};

export default Layout;
