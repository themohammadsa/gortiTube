import { getRequest } from "../API/useAxios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLibraryContext } from "../Context/LibraryContext";
import { VideoPlayer } from "../Components/MediaPlayer/VideoPlayer";
import { VideoCardHorizontal } from "../Components/MediaPlayer/VideoCardHorizontal";
import { NavBar } from "../Components/NavBar";
import { Footer } from "../Components/Footer";

export const MediaPlayer = () => {
  const [renderedVideo, setRenderedVideo] = useState([]);

  const { database, dispatch } = useLibraryContext();

  const { id } = useParams();

  useEffect(async () => {
    let {
      data: { video }
    } = await getRequest(`/watch/${id}`);
    setRenderedVideo(video[0]);

    dispatch({
      type: "ADD_TO_HISTORY",
      payload: video[0]
    });
  }, [id]);

  return (
    <>
      <div
        className="page justify-space-between"
        style={{ paddingBottom: "15rem" }}
      >
        <div>
          {" "}
          <NavBar />{" "}
        </div>
        <div className="flex-column">
          <div>
            <VideoPlayer renderedVideo={renderedVideo} />{" "}
          </div>

          <div className="flex-column flex-wrap ">
            {database.map((video, index) => {
              return (
                <div key={index}>
                  {video.id !== renderedVideo.id && (
                    <VideoCardHorizontal video={video} />
                  )}
                </div>
              );
            })}{" "}
          </div>
        </div>{" "}
      </div>{" "}
      <Footer />
    </>
  );
};
