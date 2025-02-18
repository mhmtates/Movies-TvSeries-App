import { useState, useEffect } from "react";
import { Container, Heading, Flex, Box, Skeleton, Button } from "@chakra-ui/react";
import Cards from "../components/Cards.jsx";
import { fetchTrending } from "../services/api.js";
import { sliderSettings } from "../utils/helpers.js";
import Slider from "react-slick"; 

const HomePage = () => {
  const [data, setData] = useState([]);
  const [timeWindow, setTimeWindow] = useState("day");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTrending(timeWindow)
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.error(error);
      }).finally(() => {
        setLoading(false);
      })
  }, [timeWindow]);

  
  return (
    <Container maxW={"container.xl"}>
      {/* Başlık ve Butonlar */}
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

      {/* Slider */}
      {loading ? (
        <Flex gap="4">
          {[...Array(5)].map((_, i) => (
            <Skeleton height="300px" width="200px" key={i} />
          ))}
        </Flex>
      ) : (
        <Slider {...sliderSettings}>
          {data?.map((item) => (
            <Box key={item?.id} p="2">
              <Cards item={item} type={item?.media_type} />
            </Box>
          ))}
        </Slider>
      )}
    </Container>
  );
};

export default HomePage;
