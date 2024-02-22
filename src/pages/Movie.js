import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar.js"

function Movie() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);
  const [genres, setGenres] = useState([]);  

  const params = useParams();
  const userId=params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    setTitle(data.title);
    setTime(data.time);
    setGenres(data.genres);
    })
    .catch((error) => console.error(error));
    }, [userId]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{title}</h1>
        <p>Minutes: {time}</p>
        <span>
          {genres.map((genre, index)=>(
            <span key={index}>Genres: {genre}</span>
          ))}
        </span>
      </main>
    </>
  );
};

export default Movie;
