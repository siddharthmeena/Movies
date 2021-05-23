const Movie = ({ title, overview, poster_path, vote_average }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt="" />
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
      <div className="overview">
        <h2>OverView:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};
export default Movie;
