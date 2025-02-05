import { useEffect, useState } from "react";
import { Navbar } from "../../common/navbar";
import { Container } from "../../common/container";
import { MovieList } from "../../common/movie-list";
import { Footer } from "../../common/footer";
import { NavHover } from "./components/nav-hover";
import { SearchFilm } from "./components/search-film";
import { getAllMovies } from "../../../utils/api/api";
import { MOVIES_ENDPOINT } from "../../../constants";

export const Film = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [geners, setGeners] = useState([]);

  const getGeners = (moviesList) => {
    const tempGenres = [];

    moviesList.forEach((movie) => {
      if (movie.genre) {
        tempGenres.push(movie.genre);
      }
    });

    const newArray = tempGenres.flat();
    setGeners(Array.from(new Set(newArray)));
  };

  useEffect(() => {
    if (localStorage.getItem("is-logged") !== "true") {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    getAllMovies(MOVIES_ENDPOINT)
      .then((data) => setMovies(data))
      .catch((err) => {
        setError(err);
        window.location.href = "/not-found";
      });
  }, []);

  useEffect(() => {
    getGeners(movies);
  }, [movies]);

  if (error) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <Container className="relative">
        <NavHover />
        <SearchFilm />
        <MovieList genres={geners} movies={movies} />
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};
