import axios from "axios";

export const imagePath = "https://image.tmdb.org/t/p/w500";
export const imagePathOriginal = "https://image.tmdb.org/t/p/original";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;




export const fetchTrending = async (timeWindow = "day") => {
  const { data } = await axios.get(`${baseUrl}/trending/all/${timeWindow}?api_key=${apiKey}`);

  return data?.results;
};

export const fetchDetails = async(type,id) => {
  const response =  await axios.get(`${baseUrl}/${type}/${id}?api_key=${apiKey}`);
  return response?.data;
};

