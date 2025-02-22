import axios from "axios";

export const imagePath = "https://image.tmdb.org/t/p/w500";
export const imagePathOriginal = "https://image.tmdb.org/t/p/original";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: import.meta.env.VITE_TMDB_API_KEY, language: "tr" },
});

export const fetchTrending = async (timeWindow = "day") => {
  const { data } = await api.get(`/trending/all/${timeWindow}`);
  return data?.results;
};


export const fetchDetails = async (type, id) => {
  const response = await api.get(`/${type}/${id}`);
  return response?.data;
};

export const fetchCredits = async (type, id) => {
  const response = await api.get(`/${type}/${id}/credits`);

  return response?.data;

}

export const fetchVideos = async (type, id) => {
  const response = await api.get(`/${type}/${id}/videos`);
  return response?.data;
}

export const fetchMovies = async (page, sortBy) => {
  const response = await api.get(`/discover/movie?page=${page}&sort_by=${sortBy}`);
  return response?.data;
}

export const fetchMoviesNowPlaying = async (page = 1) => {

  const { data } = await api.get(`/movie/now_playing`, {
    params: {
      page,
    },
  });
  return data?.results;
}

export const fetchPopularMovies = async (page = 1) => {

  const { data } = await api.get(`/movie/popular`, {
    params: {
      page,
    },
  });
  return data?.results;

}

export const fetchTopRatedMovies = async (page = 1) => {

  const { data } = await api.get(`/movie/top_rated`, {
    params: {
      page,
    },
  });
  return data?.results;

}

export const fetchUpComingMovies = async (page = 1) => {

  const { data } = await api.get(`/movie/upcoming`, {
    params: {
      page,
    },
  });
  return data?.results;

}


export const fetchTvSeries = async (page, sortBy) => {
  const response = await api.get(`/discover/tv?&page=${page}&sort_by=${sortBy}`);
  return response?.data;
}

export const fetchAiringTodayTvSeries = async (page = 1) => {

  const { data } = await api.get(`/tv/airing_today`, {
    params: {
      page,
    },
  });
  return data?.results;

}



export const fetchPopularTvSeries = async (page = 1) => {

  const { data } = await api.get(`/tv/popular`, {
    params: {
      page,
    },
  });
  return data?.results;

}

export const fetchTopRatedTvSeries = async (page = 1) => {

  const { data } = await api.get(`/tv/top_rated`, {
    params: {
      page,
    },
  });
  return data?.results;

}


export const searchData = async (query, page) => {
  const response = await api.get(`/search/multi?query=${query}&page=${page}`);
  return response?.data;

}