import { useEffect, useState } from "react";
import { Container } from "../../common/container";
import { Footer } from "../../common/footer";
import { Navbar } from "../../common/navbar";
import { NavHover } from "../film/components/nav-hover";
import { useParams } from "react-router-dom";
import { getMovieWithId } from "../../../utils/api/api";

export const Home = () => {
  const [movie, setMovie] = useState("");
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      getMovieWithId(params.id).then(data => setMovie(data));
    }, 1000)
  }, [])


  const truncate = (words) => {
    return `${words.slice(0, 100)}...`;
  }

  if (movie == "") {
    return <h1 className="text-white absolute top-[50%] left-[50%] text-[50px] translate-[-50%]">Loading...</h1>
  }

  return (
    <>
      <Navbar />
      <Container>
        <NavHover />
        <h1 className="text-[36px] font-normal py-10">
          Home / The Tomorrow War
        </h1>
        <div className="h-screen bg-[#201F1F] flex items-center justify-center">
          <button className="cursor-pointer rounded-[100%]">
            <img src="/assets/svgicons/play.svg" alt="play button" />
          </button>
        </div>
        <div className="flex px-[281px] py-[66px] w-full bg-[#201F1F] mt-[71px] items-center justify-between gap-[10px]">
          <a
            href="#"
            className="w-[131px] h-[71px] bg-black text-white flex items-center justify-center flex-col hover:shadow-lg hover:text-[#B11226] hover:shadow-[#B11226]"
          >
            <img className="w-[30px]" src="/assets/svgicons/movie.svg" alt="" />
            <p>VidCloud</p>
          </a>
          <a
            href="#"
            className="w-[131px] h-[71px] bg-black text-white flex items-center justify-center flex-col hover:shadow-lg hover:text-[#B11226] hover:shadow-[#B11226]"
          >
            <img className="w-[30px]" src="/assets/svgicons/play.svg" alt="" />
            <p>HDRip</p>
          </a>
          <a
            href="#"
            className="w-[131px] h-[71px] bg-black text-white flex items-center justify-center flex-col hover:shadow-lg hover:text-[#B11226] hover:shadow-[#B11226]"
          >
            <img className="w-[30px]" src="/assets/svgicons/play.svg" alt="" />
            <p>Videovard</p>
          </a>
          <a
            href="#"
            className="w-[131px] h-[71px] bg-black text-white flex items-center justify-center flex-col hover:shadow-lg hover:text-[#B11226] hover:shadow-[#B11226]"
          >
            <img className="w-[30px]" src="/assets/svgicons/play.svg" alt="" />
            <p>Dosteam</p>
          </a>
          <a
            href="#"
            className="w-[131px] h-[71px] bg-black text-white flex items-center justify-center flex-col hover:shadow-lg hover:text-[#B11226] hover:shadow-[#B11226]"
          >
            <img className="w-[30px]" src="/assets/svgicons/play.svg" alt="" />
            <p>Vidstem</p>
          </a>
        </div>
      </Container>
      <div className="">
        <div className="bg-black text-white p-8">
          <div className="flex bg-[#222] p-6 rounded-lg">
            <img
              src={movie.imgUrl}
              alt="The Tomorrow War"
              className="w-48 h-auto rounded-lg"
            />

            {/* Movie Info */}
            <div className="ml-6 flex-1">
              <h2 className="text-3xl font-bold">{movie.title}</h2>
              <div className="flex items-center mt-2">
                <span className="bg-yellow-500 text-black px-2 py-1 text-sm font-semibold">
                  HD
                </span>
                <FaStar className="text-yellow-500 ml-2" />
                <span className="ml-1">{movie.rating}</span>
                <span className="ml-4">{movie.time} min</span>
              </div>
              <p className="mt-4 text-gray-300 text-sm">{movie.description}</p>
            </div>
          </div>

          {/* Movie Metadata */}
          <div className="bg-[#222] p-6 mt-6 rounded-lg">
            <h3 className="text-xl font-semibold flex items-center">
              {movie.countries}
              <img
                src="/public/assets/svgicons/1200px-Flag_of_the_United_States 1.svg"
                alt=""
              />
            </h3>
            <div className="mt-2 text-gray-300 text-sm">
              <p>
                <span className="text-white font-semibold">Genre:</span>{" "}
                {movie.genre.join(", ")}
              </p>
              <p>
                <span className="text-white font-semibold">Release:</span>{" "}
                {movie.release}
              </p>
              <p>
                <span className="text-white font-semibold">Director:</span>{" "}
                {movie.director}
              </p>
              <p>
                <span className="text-white font-semibold">Cast:</span>{" "}
                {movie.cast.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
