import { useState, useEffect } from "react";
import { Container, Heading, Flex, Box, Skeleton, Button } from "@chakra-ui/react";
import Cards from "../components/Cards.jsx";
import { fetchTrending, fetchMoviesNowPlaying, fetchPopularMovies, fetchTopRatedMovies, fetchUpComingMovies, fetchAiringTodayTvSeries, fetchPopularTvSeries, fetchTopRatedTvSeries } from "../services/api.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Hero from "../components/Hero.jsx";

const HomePage = () => {
  const [trendingProductions, setTrendingProductions] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpComingMovies] = useState([]);
  const [airingTodayTvSeries, setAiringTodayTvSeries] = useState([]);
  const [popularTvSeries, setPopularTvSeries] = useState([]);
  const [topRatedTvSeries, setTopRatedTvSeries] = useState([]);
  const [timeWindow, setTimeWindow] = useState("day");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);

      const [trending, nowPlaying, popularMovie, topMovie, upcoming, airingToday, onTheAir, popularTv, topTv] = await Promise.all([
        fetchTrending(timeWindow),
        fetchMoviesNowPlaying(),
        fetchPopularMovies(),
        fetchTopRatedMovies(),
        fetchUpComingMovies(),
        fetchAiringTodayTvSeries(),
        fetchPopularTvSeries(),
        fetchTopRatedTvSeries(),
      ]);

      setTrendingProductions(trending);
      setNowPlayingMovies(nowPlaying);
      setPopularMovies(popularMovie);
      setTopRatedMovies(topMovie);
      setUpComingMovies(upcoming);
      setAiringTodayTvSeries(airingToday);
      setPopularTvSeries(popularTv);
      setTopRatedTvSeries(topTv);


      setLoading(false);

    };

    fetchData();

  }, [timeWindow]);



  // **Splide Slider Ayarları**
  const splideOptions = {
    type: "loop",
    perPage: 5,
    perMove: 2,
    gap: "0px",
    pagination: false,
    breakpoints: {
      1024: { perPage: 4, perMove: 2 },
      768: { perPage: 2, perMove: 1 },
      480: { perPage: 1, perMove: 1 },
    },
  };







  return (
    <Container maxW="container.xl">

      <Hero />

      <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
        Trend Yapımlar
      </Heading>
      <Splide options={splideOptions}>
        {trendingProductions?.map((trend) => (
          <SplideSlide key={trend?.id}>
            <Cards item={trend} type={trend?.media_type} />
          </SplideSlide>
        ))}
      </Splide>


      <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
        Gösterimdeki Filmler
      </Heading>
      <Splide options={splideOptions}>
        {nowPlayingMovies?.map((movie) => (
          <SplideSlide key={movie?.id}>
            <Cards item={movie} type="movie" />
          </SplideSlide>
        ))}
      </Splide>



      <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
        Popüler Filmler
      </Heading>
      <Splide options={splideOptions}>
        {popularMovies?.map((movie) => (
          <SplideSlide key={movie?.id}>
            <Cards item={movie} type="movie" />
          </SplideSlide>
        ))}
      </Splide>

      <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
        En Yüksek Puanlı Filmler
      </Heading>
      <Splide options={splideOptions}>
        {topRatedMovies?.map((movie) => (
          <SplideSlide key={movie?.id}>
            <Cards item={movie} type="movie" />
          </SplideSlide>
        ))}
      </Splide>

      <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
        Yakındaki Filmler
      </Heading>
      <Splide options={splideOptions}>
        {upcomingMovies?.map((movie) => (
          <SplideSlide key={movie?.id}>
            <Cards item={movie} type="movie" />
          </SplideSlide>
        ))}
      </Splide>

      <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
        Yakındaki Filmler
      </Heading>
      <Splide options={splideOptions}>
        {upcomingMovies?.map((movie) => (
          <SplideSlide key={movie?.id}>
            <Cards item={movie} type="movie" />
          </SplideSlide>
        ))}
      </Splide>

      <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
        Yayındaki Diziler
      </Heading>
      <Splide options={splideOptions}>
        {airingTodayTvSeries?.map((tv) => (
          <SplideSlide key={tv?.id}>
            <Cards item={tv} type="tv" />
          </SplideSlide>
        ))}
      </Splide>

      <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
         Popüler Diziler
      </Heading>
      <Splide options={splideOptions}>
        {popularTvSeries?.map((tv) => (
          <SplideSlide key={tv?.id}>
            <Cards item={tv} type="tv" />
          </SplideSlide>
        ))}
      </Splide>

      {/* <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
         En Yüksek Puanlı Diziler
      </Heading>
      <Splide options={splideOptions}>
        {topRatedTvSeries?.map((tv) => (
          <SplideSlide key={tv?.id}>
            <Cards item={tv} type="tv" />
          </SplideSlide>
        ))}
      </Splide> */} 

      


    </Container>
  );
};

export default HomePage;
