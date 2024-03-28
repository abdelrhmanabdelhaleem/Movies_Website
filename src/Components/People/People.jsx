import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loding.jsx";
import MediaItem from "../MediaItem/MediaItem.jsx";
import { Helmet } from "react-helmet";

export default function People() {
  let pageNumber = new Array(10).fill("*").map((el, i) => i + 1);
  const [loading, setLoading] = useState(true);
  const [peopleList, setPeopleList] = useState([]);

  async function getPeople(pageNum = 1) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/person/week?api_key=2acf94cbe57ef067709c1573363ddb3c&language=en-US&page=${pageNum}`
    );
    setPeopleList(data.results);
    setLoading(false);
  }

  function changePageNum(i) {
    getPeople(i);
  }

  async function search(e) {
    let value = e.target.value;

    if (value !== "") {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=2acf94cbe57ef067709c1573363ddb3c&language=en-US&query=${value}&page=1&include_adult=false`
      );

      setPeopleList(data.results);
    } else {
      getPeople();
    }
  }
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      {loading === true ? <Loading /> : null}
      <div className="application">
        <Helmet>
          <title>People</title>
        </Helmet>
      </div>
      <input
        onChange={search}
        type="text"
        className="form-control bg-transparent w-50 mt-3 m-auto text-white  "
        placeholder="search here"
      />

      <div className="row mt-5">
        {peopleList.map((mov, index) => (
          <MediaItem mov={mov} key={index} mediatype={"person"} />
        ))}
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

      {/* <div aria-label="..." className="d-flex w-50  m-auto my-3">
        <ul className="pagination pagination-lg">
          {pageNumber.map((el, index) => (
            <li
              key={index}
              onClick={() => changePageNum(el)}
              className="page-item "
              aria-current="page"
            >
              <span className="page-link">{el}</span>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
