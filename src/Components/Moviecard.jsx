import "./Moviecard.css";
export const Moviecard = ({ movie }) => {
  const { title, vote_average, poster_path, release_date } = movie;
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="movie-card"
      />
      <small>{release_date.slice(0, 4)} - Horror/Thriller</small>
      <h5 className="title">{title}</h5>
      <em>{vote_average}</em>
    </div>
  );
};
