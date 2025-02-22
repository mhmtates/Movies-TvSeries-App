import { Box, Heading, Text, Flex, Button, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchTrending } from "../services/api";

const Hero = () => {
  const [trendingProductions, setTrendingProductions] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeWindow, setTimeWindow] = useState("day");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const trending = await fetchTrending(timeWindow);
        setTrendingProductions(trending);

        if (trending.length > 0) {
          const randomIndex = Math.floor(Math.random() * trending.length);
          setHeroMovie(trending[randomIndex]); // Rastgele bir trend yapımı seç
        }
      } catch (error) {
        console.error("Trend yapımları alırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeWindow]);

  return (
    <Box position="relative" w="100%" h={{ base: "60vh", md: "80vh" }} overflow="hidden">
      {loading ? (
        <Flex justify="center" align="center" h="100%">
          <Spinner size="xl" color="teal.500" />
        </Flex>
      ) : (
        heroMovie && (
          <Box
            w="100%"
            h="100%"
            bgImage={`url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`}
            bgPosition="center"
            bgSize="cover"
            display="flex"
            alignItems="flex-end"
            justifyContent="flex-start"
          >
            {/* Karartma Efekti */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bgGradient="linear(to-b, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 100%)"
            />

            {/* İçerik */}
            <Box
              position="relative"
              zIndex="10"
              p={{ base: "4", md: "10" }}
              maxW="container.md"
              color="white"
            >
              <Heading fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold" mb={3}>
                {heroMovie.title || heroMovie.name}
              </Heading>

              <Text fontSize={{ base: "sm", md: "lg" }} maxW="600px" noOfLines={3} mb={5}>
                {heroMovie.overview || "Bu yapımın açıklaması mevcut değil."}
              </Text>

              {/* Daha Fazla Bilgi Butonu */}
              <Button
                as="a"
                href={`/${heroMovie.media_type}/${heroMovie.id}`}
                size="lg"
                colorScheme="gray"
                bg="rgba(255, 255, 255, 0.3)"
                _hover={{ bg: "rgba(255, 255, 255, 0.5)" }}
                borderRadius="md"
              >
                Daha Fazla Bilgi
              </Button>
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};

export default Hero;
