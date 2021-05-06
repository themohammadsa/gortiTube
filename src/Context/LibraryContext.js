import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect
} from "react";
import { getRequest } from "../API/useAxios";
import { ReducerFunction } from "../Reducer/ReducerFunction";

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [database, setDatabase] = useState([]);
  const [loader, setLoader] = useState(false);

  const initialState = {
    likedVideos: [],
    playlist: [],
    watchLater: [],
    history: [],
    search: ""
  };

  const [state, dispatch] = useReducer(ReducerFunction, initialState);

  useEffect(async () => {
    const {
      data: { videos }
    } = await getRequest("/videolibrary");
    setLoader(true);
    setDatabase(videos);
  }, []);

  console.log(state);

  return (
    <>
      <LibraryContext.Provider value={{ database, state, dispatch, loader, setLoader }}>
        {children}
      </LibraryContext.Provider>
    </>
  );
};

export const useLibraryContext = () => {
  return useContext(LibraryContext);
};
