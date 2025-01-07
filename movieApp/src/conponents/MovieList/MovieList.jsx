import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./Moviecard";

const MovieList = () => {
  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ko`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setFilterMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const handleFilter = (rate) => {
    setMinRating(rate); //입력된 평점을 일단 스테이트 저장

    const filtered = movies.filter((movie) => movie.vote_average >= rate);
    setFilterMovies(filtered); // 평점 이상 영화만 저장
  };
  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          인기순 <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li
              onClick={() => {
                handleFilter(8);
              }}
              className="movie_filter_item active"
            >
              8+ Star
            </li>
            <li
              onClick={() => {
                handleFilter(7);
              }}
              className="movie_filter_item"
            >
              7+ Star
            </li>
            <li
              onClick={() => {
                handleFilter(6);
              }}
              className="movie_filter_item"
            >
              6+ Star
            </li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
