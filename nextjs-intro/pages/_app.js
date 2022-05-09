// about,index 파일이 열리기전에 이 파일을 먼저 로딩한다.
// Component
// psageProps
// about.js 컴포넌트를 실행하고 싶다면
// next.js는 about.js 컴포넌트를 App의 첫번째 인수로 받아와서 실행시킨다.
import Navbar from "../components/Navbar";
const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <style jsx>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default App;
