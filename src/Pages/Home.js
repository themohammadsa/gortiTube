import { useLibraryContext } from "../Context/LibraryContext";
import { VideoCard } from "../Components/VideoCard";
import { NavBar } from "../Components/NavBar";
import { Footer } from "../Components/Footer";
import { Loader } from "../Components/Loader/Loader";

export const Home = () => {
  const { database, loader } = useLibraryContext();

  return (
    <>
      <div className="page">
        <div>
          <NavBar />
        </div>
        {!loader ? (
          <div className="loader">
            <Loader />{" "}
          </div>
        ) : (
          <div className="flex-row flex-wrap justify-space-evenly">
            {database.map((video, index) => {
              return (
                <div key={index}>
                  <VideoCard video={video} />
                </div>
              );
            })}{" "}
          </div>
        )}{" "}
      </div>{" "}
      <Footer />
    </>
  );
};
