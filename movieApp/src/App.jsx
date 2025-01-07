import "./App.css";
import Navbar from "./conponents/Navbar/Navbar";
import MovieList from "./conponents/MovieList/MovieList";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
