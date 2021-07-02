import { Home } from '../pages/home/Home';
import { LikedVideos } from '../pages/likedVideos/LikedVideos';
import { Playlist } from '../pages/playlist/Playlist';
import { WatchLater } from '../pages/watchLater/WatchLater';
import { History } from '../pages/history/History';
import { Routes, Route } from 'react-router-dom';
import { MediaPlayer } from '../pages/mediaPlayer/MediaPlayer';
import { Search } from '../../pages/search/Search';
import { Error } from "../../pages/error/Error"
import { PrivateRoute } from './router/PrivateRoute';
import { SignUp } from '../../pages/signup/SignUp';
import { Login } from '../../pages/login/Login';

export const Router = () => {
  return (
    <div className="page-content">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="/liked-videos" element={<LikedVideos />} />
        <PrivateRoute path="/playlist" element={<Playlist />} />
        <PrivateRoute path="/watch-later" element={<WatchLater />} />
        <PrivateRoute path="/history" element={<History />} />
        <PrivateRoute path="/watch/:id" element={<MediaPlayer />} />
        <PrivateRoute path="/search/:id" element={<Search />} />

        <Route path="*" element={<Error />} />
      </Routes>{' '}
    </div>
  );
};
