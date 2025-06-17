import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import DefaultLayout from "./layout/DefaultLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MovieListPage />} />
          <Route path="movies/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
