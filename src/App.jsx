import {useState, useEffect} from "react";
// import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Constant with your API Key
  const apiKey = "a52dc047";
  const [movie, setMovie] = useState(null);

  // const getMovie = async (searchTerm) => {
  //   const response = await fetch(
  //     `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
  //   );
  //   const data = await response.json();
  //   setMovie(data);
  // };
  const getMovie = async(searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch(e) {
      console.error(e)
    }
  }

  // * array of some movies
  //  ["robots","white chicks","avatar","mean girls","norbit","narnia", "monsters inc"]; 
// const
 

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);



  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

