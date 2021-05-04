import { useContext, createContext, useState } from "react";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [displayPlaylist, setDisplayPlaylist] = useState(false);

  const [currentVideo, setCurrentVideo] = useState({});

  const setDisplayPlaylistFn = () => setDisplayPlaylist((block) => !block);

  return (
    <ToggleContext.Provider
      value={{
        displayPlaylist,
        setDisplayPlaylist,
        setDisplayPlaylistFn,

        currentVideo,
        setCurrentVideo
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggleContext = () => {
  return useContext(ToggleContext);
};
