import Seo from "../../components/Seo";

const Detail = ({ info }) => {
  console.log(info);
  return (
    <main className="detail">
      <Seo title={"title"} />
      <article className="wrapper">
        <section className="poster">
          <div className="poster_wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
              alt="영화 포스터"
            />
            <div className="desc">
              <h2>{info.original_title}</h2>
              <div className="genre">
                <span>장르:</span>
                {info.genres &&
                  info.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
              </div>
              <p>{info.overview}</p>
              <div className="vote">
                <span>평점: {info.vote_average}</span>
                <span>투표인원: {info.vote_count}</span>
              </div>
            </div>
          </div>
        </section>
      </article>
      <style jsx>{`
        .poster_wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .poster_wrapper img {
          width: 100%;
        }
        .genre {
          display: flex;
          gap: 10px;
          font-weight: bold;
        }
        .vote {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </main>
  );
};

export default Detail;

export async function getServerSideProps({ params: { detail } }) {
  const info = await (
    await fetch(`http://localhost:3000/api/movies/${detail[0]}`)
  ).json();
  return {
    props: {
      info,
    },
  };
}
