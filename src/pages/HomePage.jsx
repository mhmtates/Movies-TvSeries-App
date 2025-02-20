import { useState, useEffect } from "react";
import { Container, Heading, Flex, Box, Skeleton, Button } from "@chakra-ui/react";
import Cards from "../components/Cards.jsx";
import { fetchTrending, fetchMoviesNowPlaying } from "../services/api.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const HomePage = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [timeWindow, setTimeWindow] = useState("day");
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [loadingNowPlaying, setLoadingNowPlaying] = useState(true);

  // Trend Olanlar API Çağrısı (Dinamik)
  useEffect(() => {
    const controller = new AbortController();

    const getTrendingData = async () => {
      setLoadingTrending(true);
      try {
        const response = await fetchTrending(timeWindow);
        if (!controller.signal.aborted) {
          setTrendingData(response);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Trend yapımları alırken hata oluştu:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingTrending(false);
        }
      }
    };

    getTrendingData();

    return () => controller.abort();
  }, [timeWindow]);

  // Gösterimde Olan Filmler API Çağrısı (Sadece İlk Render'da)
  useEffect(() => {
    const controller = new AbortController();

    const getNowPlayingMovies = async () => {
      setLoadingNowPlaying(true);
      try {
        const response = await fetchMoviesNowPlaying();
        if (!controller.signal.aborted) {
          setNowPlayingMovies(response);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Gösterimdeki filmler alınırken hata oluştu:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingNowPlaying(false);
        }
      }
    };

    getNowPlayingMovies();

    return () => controller.abort();
  }, []);

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
      {/* Trend Olanlar */}
      <Flex alignItems="baseline" gap="4" my="10">
        <Heading as="h2" fontSize="md" textTransform="uppercase">
          Trend Olanlar
        </Heading>
        <Flex alignItems="center" gap="2" border="1px solid teal" borderRadius="20px">
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
        <Splide options={splideOptions}>
          {trendingData?.map((trend) => (
            <SplideSlide key={trend?.id}>
              <Cards item={trend} type={trend?.media_type} />
            </SplideSlide>
          ))}
        </Splide>
      )}

      {/* Gösterimde Olan Filmler */}
      <Heading as="h2" fontSize="md" textTransform="uppercase" my={10}>
        Gösterimdeki Filmler
      </Heading>

      {loadingNowPlaying ? (
        <Flex gap="4">
          {[...Array(5)].map((_, i) => (
            <Skeleton height="300px" width="200px" key={i} />
          ))}
        </Flex>
      ) : (
        <Splide options={splideOptions}>
          {nowPlayingMovies?.map((movie) => (
            <SplideSlide key={movie?.id}>
              <Cards item={movie} type="movie" />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </Container>
  );
};

export default HomePage;
