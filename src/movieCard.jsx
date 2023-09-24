import React from "react";

const movieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        />
      </div>
      <div>
        <span>
          {movie.Type}
          <h3>{movie.Title}</h3>
        </span>
      </div>
    </div>
  );
};

export default movieCard;
