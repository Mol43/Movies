import React from "react";
import { MovieCard } from "./movie-card";

export const MovieList = ({ genres, movies }) => {
    const getMoviesWithGenre = (genre) => {
        const result = [];

        movies.forEach((movie) => {
            if (movie.genre && movie.genre.includes(genre)) {
                result.push(movie);
            }
        });

        return result;
    };

    return (
        <>
            {genres.map((genre) => (
                <div key={genre}>
                    <h2 className="text-[48px] text-white font-[400] mt-[53px]">{genre}</h2>
                    <div className="flex gap-11">
                        {getMoviesWithGenre(genre).slice(0, 6).map((movie) => {
                            return <MovieCard key={movie.id} movie={movie} />;
                        })}
                    </div>
                </div>
            ))}
        </>
    );
};
