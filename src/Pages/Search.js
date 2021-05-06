import { useLibraryContext } from "../Context/LibraryContext";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
import { VideoCard } from "../Components/VideoCard";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const { database } = useLibraryContext();

  const URL = new URLSearchParams(useLocation().search);
  const searchValue = URL.get("results");

  const filteredDB = database.filter((video) =>
    video.title.toUpperCase().includes(searchValue.toUpperCase())
  );

  return (
    <>
      {" "}
      <div className="page">
        <div>
          {" "}
          <NavBar />{" "}
        </div>
        <div>
          <div>
            {" "}
            <h2 className="heading margin-auto">
              {filteredDB.length} Videos Found{" "}
            </h2>{" "}
          </div>
          <div className="flex-row flex-wrap justify-space-evenly">
            {filteredDB.map((video, index) => {
              return (
                <div key={index}>
                  <VideoCard video={video} />
                </div>
              );
            })}{" "}
          </div>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
};
