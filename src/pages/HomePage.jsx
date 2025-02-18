import { useState, useEffect } from "react";
import { Container, Heading, Flex, Box, Skeleton, Button } from "@chakra-ui/react";
import Cards from "../components/Cards.jsx";
import { fetchTrending, fetchMoviesNowPlaying } from "../services/api.js";
import { sliderSettings } from "../utils/helpers.js";
import Slider from "react-slick";

const HomePage = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [timeWindow, setTimeWindow] = useState("day");
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [loadingNowPlaying, setLoadingNowPlaying] = useState(true);

  useEffect(() => {
    setLoadingTrending(true);
    fetchTrending(timeWindow)
      .then(response => {
        setTrendingData(response);
      })
      .catch(error => {
        console.error(error);
      }).finally(() => {
        setLoadingTrending(false);
      });
  }, [timeWindow]);

  useEffect(() => {
    setLoadingNowPlaying(true);
    fetchMoviesNowPlaying()
      .then(response => {
        setNowPlayingMovies(response);
      })
      .catch(error => {
        console.error(error);
      }).finally(() => {
        setLoadingNowPlaying(false);
      });
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {/* Trend Olanlar */}
      <Flex alignItems={"baseline"} gap={"4"} my={"10"}>
        <Heading as={"h2"} fontSize={"md"} textTransform={"uppercase"}>
          Trend Olanlar
        </Heading>
        <Flex alignItems={"center"} gap={"2"} border={"1px solid teal"} borderRadius={"20px"}>
          <Button
            size="sm"
            variant={timeWindow === "day" ? "solid" : "outline"}
            colorScheme="teal"
            onClick={() => setTimeWindow("day")}
          >
            Bugün
          </Button>
          <Button
            size="sm"
            variant={timeWindow === "week" ? "solid" : "outline"}
            colorScheme="teal"
            onClick={() => setTimeWindow("week")}
          >
            Bu Hafta
          </Button>
        </Flex>
      </Flex>

      {loadingTrending ? (
        <Flex gap="4">
          {[...Array(5)].map((_, i) => (
            <Skeleton height="300px" width="200px" key={i} />
          ))}
        </Flex>
      ) : (
        <Slider {...sliderSettings}>
          {trendingData?.map((trend) => (
            <Box key={trend?.id} p="2">
              <Cards item={trend} type={trend?.media_type} />
            </Box>
          ))}
        </Slider>
      )}

      {/* Gösterimde Olan Filmler */}
      <Heading as={"h2"} fontSize={"md"} textTransform={"uppercase"} my={10}>
        Gösterimde Olan Filmler
      </Heading>

      {loadingNowPlaying ? (
        <Flex gap="4">
          {[...Array(5)].map((_, i) => (
            <Skeleton height="300px" width="200px" key={i} />
          ))}
        </Flex>
      ) : (
        <Slider {...sliderSettings}>
          {nowPlayingMovies?.map((movie) => (
            <Box key={movie?.id} p="2">
              <Cards item={movie} type="movie" />
            </Box>
          ))}
        </Slider>
      )}
    </Container>
  );
};

export default HomePage;
