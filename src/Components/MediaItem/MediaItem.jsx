import React from "react";
import { Link } from "react-router-dom";

export default function MediaItem({ mov, mediatype }) {
  mov.media_type = mov.media_type ? mov.media_type : mediatype;
  return (
    <>
      <div className="col-md-2">
        <Link to={`/moviedetails/${mov.id}/${mov.media_type}`}>
          <div className="movie position-relative  ">
            <img
              className="w-100"
              src={
                mov.poster_path
                  ? "https://image.tmdb.org/t/p/w500" + mov.poster_path
                  : "https://image.tmdb.org/t/p/w500" + mov.profile_path
              }
              alt=""
            />
            <div className="vote pe-1 text-center position-absolute top-0 end-0">
              {mov.vote_average ? (
                <i class="fa-solid  fa-star text-warning "></i>
              ) : (
                ""
              )}
              {mov.vote_average?.toFixed(1)}{" "}
            </div>
            <div className=" overlay  d-flex align-items-center justify-content-center">
              <p>Go To Details</p>
            </div>
          </div>
          <h3 className="h6 my-2">
            {mov.title} {mov.name}
          </h3>
        </Link>
      </div>
    </>
  );
}
