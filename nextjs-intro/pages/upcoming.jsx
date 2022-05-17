import Link from "next/link";
import Seo from "../components/Seo";
const Upcoming = ({ results }) => {
  return (
    <div>
      <Seo title={"Upcoming"} />
      {results.length > 0 ? (
        <ul className="list">
          {results.map((movie) => (
            <Link
              href={`/movies/${movie.id}/${movie.original_title}`}
              key={movie.id}
            >
              <a>
                <li className="item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="영화포스터"
                  />
                  <div className="item_content">
                    <h4>{movie.original_title}</h4>
                    <div className="item_average">
                      <span>평점: {movie.vote_average}</span>
                      <span>투표 수: {movie.vote_count}</span>
                    </div>
                  </div>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      ) : (
        <>로딩중입니다</>
      )}

      <style jsx>
        {`
          .list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .item > img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .item:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .content {
          }
          .content h4 {
          }
          .content span {
          }
        `}
      </style>
    </div>
  );
};

export default Upcoming;

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
