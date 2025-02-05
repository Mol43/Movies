import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/pages/main/main";
import { Film } from "./components/pages/film/film";
import { NotFound } from "./components/pages/not-found/not-found";
import { FilmInfo } from "./components/pages/film/components/film-info";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/film" element={<Film />} />
                <Route path="/movie/:id" element={<FilmInfo />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
