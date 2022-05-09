// http://localhost:3000/movies/:id

import { useRouter } from "next/router";
import Seo from "../../components/Seo";
const Detail = ({ params }) => {
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h1>{title}</h1>
    </div>
  );
};

export default Detail;

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
