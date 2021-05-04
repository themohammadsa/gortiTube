import { DateToString, ViewsToString, TitleShortner } from "../Functions";
import { useNavigate } from "react-router-dom";

export const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div
      className="video-card pointer flex-column justify-space-between"
      onClick={() => navigate(`/watch/${video.id}`)}
    >
      <img src={video.thumbnail} className="thumbnail" />

      <div className="align-left">
        <h2 style={{}}> {TitleShortner(video.title)} </h2>{" "}
      </div>
      <div className="flex-row">
        <div>
          <img src={video.avatar} className="avatar" />{" "}
        </div>

        <div className="flex-column align-left color-grey">
          <span style={{ paddingBottom: "0.2rem" }}> {video.author} </span>

          <span>
            {ViewsToString(video.views)} views • {DateToString(video.date)}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
