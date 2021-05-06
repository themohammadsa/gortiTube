import { Home } from "../Pages/Home";
import { LikedVideos } from "../Pages/LikedVideos";
import { Playlist } from "../Pages/Playlist";
import { WatchLater } from "../Pages/WatchLater";
import { History } from "../Pages/History";
import { Routes, Route } from "react-router-dom";
import { MediaPlayer } from "../Pages/MediaPlayer";
import { Search } from "../Pages/Search";
import { Error } from "../Pages/Error";

export const Router = () => {
  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/watch/:id" element={<MediaPlayer />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>{" "}
    </div>
  );
};
