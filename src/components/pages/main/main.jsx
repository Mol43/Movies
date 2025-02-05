import { useEffect, useState } from "react";
import { Navbar } from "../../common/navbar";
import { Container } from "../../common/container";
import { TitleShow } from "./components/title-show";
import { MovieList } from "../../common/movie-list";
import { Footer } from "../../common/footer";
import { BigButton } from "./components/big-button";
import { MOVIES_ENDPOINT } from "../../../constants/index";
import { getAllMovies } from "../../../utils/api/api";

export const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [geners, setGeners] = useState([]);

  const getGeners = (moviesList) => {
    const tempGenres = [];

    moviesList.forEach((movie) => {
      tempGenres.push(movie.genre);
    });

    const newArray = tempGenres.flat();
    setGeners(Array.from(new Set(newArray)));
  };

  useEffect(() => {
    getAllMovies(MOVIES_ENDPOINT)
      .then((data) => setMovies(data))
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    getGeners(movies);
  }, [movies]);

  useEffect(() => {
    if (localStorage.getItem("is-logged") === "true") {
      window.location.href = "/film";
    }
  }, []);

  return (
    <>
      <Navbar />
      <Container className="relative">
        <TitleShow />
        <BigButton />
        <MovieList genres={geners} movies={movies} />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
};
