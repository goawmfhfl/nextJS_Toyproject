# NextMovieApp

React 환경에서 NextJs를 사용하여 SSR를 구현하는 토이 프로젝트 입니다.

<br/>

# CSR vs SSR

그동안 나는 리액트를 통해서 CSR방식으로 개발을 해왔다. CSR을 통해서 개발을 할 경우 사용자가 초기에 웹 사이트에 접속을 했을 때 아무것도 보이지 않는 빈 배경이 보여지게 된다. 왜일까? 왜냐하면 HTML 파일에는 아무런 내용이 없이 그저 데이터를 요청하는 JS파일이 있기 때문이다. JS파일은 클라이언트 사이드에 도달하고 나서 데이터를 패칭한다. 이때 HTML은 빈 뼈대와 같다. 별다른 내용을 담고있지 않기 때문에 흰 화면을 보여주게 될 것이다. 하지만 SSR은 다르다. 데이터를 요청할 경우에 클라이언트는 렌더링 된 파일을 서버로부터 전달받는다. 그로인해서 빈 페이지가 보여지는것이 아닌 이미 렌더링 된 파일을 화면에 보여주는 것이다.

- 자바스크립트 동작을 제어하면 어떻게 될까?

CSR에서 자바스크립트 동작을 제어한다면 화면에 아무것도 보여지지 않을 것이다

SSR에서 자바스크립트 동작을 제어한다면 이미 서버에서 렌더링 된 파일이 있기 때문에 해당 파일을 보여줄 것이다.

<br/>

## How to get SSR

```jsx
export async function getServerSideProps() {
  // 백엔드에서만 실행이 된다
  // 서버에서 렌더링 되는 코드들
  // API 작성시 client에 보여지지 않는다.
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
```

기존 프론트엔드 코드를 작성하는 곳에 `getServerSideProps` 를 작성한다. 이로써 프론트에서 백엔드 데이터를 제어할 수 있게된다. 해당 코드는 서버에서 동작한다. 반환값은 해당 ViewComponents에 Props로 전달된다.

# 자주 사용되는 패턴

1. 사용자가 about 페이지로 라우팅을 시도한다고 가정해보자.
2. about 컴포넌트는 App에 components props로 전달된다.
3. (about)getServerSideProps를 호출한다.
4. (about)SSR을 하여 얻어온 정보를 pageProps로 넘겨준다.
5. Layout Components에 기반한 UI를 렌더링한다.

# pre-render vs SSR

### SSR의 특징

---

- API로 불러온 데이터가 준비가 다 되어야지 사용자에게 보여진다.
- 데이터가 다 불러와지기 때문에 검색엔진최적화에 유리하다

<br/>

### pre-render특징

---

- navbar, footer 그리고 loading 상태를 보여줄 수 있다.
- 데이터가 불러오기전에 로딩 상태를 보여주고 그 이후에 불러와진 데이터를 보여줄 수 있다.

<br/>

### 언제 getServerSideProps를 사용해야 할까?

---

request time에 반드시 데이터를 fetch해와야 하는 페이지를 pre-render해야 하는 경우에만getServerSideProps를 사용해야 합니다. 데이터를 pre-render할 필요가 없다면 client side에서 데이터를 가져오는 것을 고려해야 합니다.

<br/>

### 클라이언트 측에서 데이터 가져오는 과정 (Fetching data on the client side)

---

페이지에 자주 업데이트되는 데이터가 포함되어 있고 데이터를 pre-render할 필요가 없는 경우 클라이언트 측에서 데이터를 가져올 수 있다.

1. 먼저 데이터가 없는 페이지를 즉시 표시한다

2. 페이지의 일부는 Static Generation을 사용해 pre-render할 수 있다.

3. 없는 데이터를 위해 loading 상태를 표시할 수 있습니다.

4. 그런 다음 클라이언트 측에서 데이터를 가져와 준비가 되면 표시합니다.

이 접근 방식은 예를 들어 사용자 대시보드 페이지에 적합합니다. 왜냐하면 대시보드는 사용자별 비공개 페이지이기 때문에 SEO와는 관련이 없으며 페이지를 미리 렌더링할 필요가 없다. 또한 데이터는 자주 업데이트되므로 요청 시 데이터를 가져와야 한다

즉, 영화 상세페이지 정보, 영화 리스트를 불러오는 정보같은 경우에는 SSR이 좋다고 이해를했다. 그래야지 검색엔진 최적화에 유리하니깐.

<br/>

# 파일구조

nextjs-intro
┣ pages
┃ ┣ movies
┃ ┃ ┗ [...detail].jsx
┃ ┣ \_app.jsx
┃ ┣ index.jsx
┃ ┣ showing.jsx
┃ ┣ toprated.jsx
┃ ┗ upcoming.jsx
┣ styles
┃ ┗ globals.css
┣ .env
┣ .eslintrc.json
┣ .gitignore
┣ next.config.js
┣ package.json
┗ yarn.lock
