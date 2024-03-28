import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loding.jsx";
import MediaItem from "../MediaItem/MediaItem.jsx";
import { Helmet } from "react-helmet";

export default function Movies() {
  let pageNumber = new Array(10).fill("*").map((el, i) => i + 1);

  const [category, setCategory] = useState("popular");
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMovie(pageNum = 1, type = "popular") {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=2acf94cbe57ef067709c1573363ddb3c&language=en-US&page=${pageNum}`
    );
    setMoviesList(data.results);
    setLoading(false);
  }

  function changePageNum(i) {
    getMovie(i, category);
  }
  function getType(e) {
    let type = e.target.id;
    getMovie(1, type);
    setCategory(type);
  }

  async function search(e) {
    let value = e.target.value;

    if (value !== "") {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2acf94cbe57ef067709c1573363ddb3c&language=en-US&query=${value}&page=1&include_adult=false`
      );

      setMoviesList(data.results);
    } else {
      getMovie();
    }
  }
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {loading === true ? <Loading /> : null}
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <input
        onChange={search}
        type="text"
        className="form-control bg-transparent w-50 mt-3 m-auto text-white  "
        placeholder="search here"
      />

      <div className="row mt-5">
        <div className="col-md-2 listaaa h-25">
          <p onClick={getType} id="popular">
            popular
          </p>
          <p onClick={getType} id="top_rated">
            top rated
          </p>
          <p onClick={getType} id="upcoming">
            upcoming
          </p>
          <p onClick={getType} id="now_playing">
            now playing
          </p>
        </div>

        <div className="col-md-10">
          <div className="row">
            {moviesList.map((mov, index) => (
              <MediaItem mov={mov} key={index} mediatype={"movie"} />
            ))}
          </div>
          <div className="  d-flex justify-content-center my-4">
            <div aria-label="...">
              <ul className="pagination pagination-sm ">
                {pageNumber.map((el, index) => (
                  <li
                    key={index}
                    onClick={() => changePageNum(el)}
                    className="page-item   "
                    aria-current="page"
                  >
                    <span className="page-link p-3 ">{el}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
