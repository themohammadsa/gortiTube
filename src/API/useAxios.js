import axios from "axios";

const API_URL = "https://gortiTube.themohammadsa.repl.co";

export const getRequest = async (url) => {
  try {
    const response = await axios.get(`${API_URL}${url}`);
    return response;
  } catch (error) {
    return alert(`Error Message: `, error);
  }
};
