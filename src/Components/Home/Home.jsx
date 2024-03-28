import React, { useContext } from "react";
import MediaItem from "../MediaItem/MediaItem.jsx";
import { MediaContext } from "./../Context/Store";
import Loading from "./../Loading/Loding";

export default function Home() {
  let { trendingMovie, trendingPerson, trendingTv, loading } =
    useContext(MediaContext);
  return (
    <>
      {loading === true ? <Loading /> : null}
      <div className="row my-3">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr mb-3 w-25"></div>

            <h2 className="h4">
              trending <br /> movies <br /> to watch now
            </h2>
            <p className="text-muted py-3">most watched movie by day</p>

            <div className="brdr mt-2 w-100"></div>
          </div>
        </div>
        {trendingMovie.slice(0, 10).map((mov, index) => (
          <MediaItem mov={mov} key={index} />
        ))}
      </div>

      <div className="row my-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr mb-3 w-25"></div>

            <h2 className="h4">
              trending <br /> Tv shows <br /> to watch now
            </h2>
            <p className="text-muted py-3">most watched tv shows by day</p>

            <div className="brdr mt-2 w-100"></div>
          </div>
        </div>
        {trendingTv.slice(0, 10).map((mov, index) => (
          <MediaItem mov={mov} key={index} />
        ))}
      </div>

      <div className="row my-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr mb-3 w-25"></div>

            <h2 className="h4">
              trending <br /> actors <br /> to watch now
            </h2>
            <p className="text-muted py-3">most watched actor by day</p>

            <div className="brdr mt-2 w-100"></div>
          </div>
        </div>
        {trendingPerson.slice(0, 10).map((mov, index) => (
          <MediaItem mov={mov} key={index} />
        ))}
      </div>
    </>
  );
}
