import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import logotext from "../Icons/logotext.png";
import logo from "../Icons/logo.png";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);

  return (
    <header className="header-bar">
      <div className="flex-row justify-space-between header-contents">
        <div className="flex-row">
          <img
            onClick={() => navigate("/")}
            src={logo}
            className="logo pointer"
          ></img>
          <img
            onClick={() => navigate("/")}
            src={logotext}
            className="logotext"
          ></img>
        </div>{" "}
        <div className="desktop">
          <SearchBar />
        </div>
        <div className="flex-row">
          <FaSearch
            className="react-icon header-icon mobile"
            onClick={() => setSearch(!search)}
          />
          <FaUserAlt className="react-icon header-icon" />{" "}
        </div>
      </div>
      <div className="mobile">{search && <SearchBar />} </div>
    </header>
  );
};
