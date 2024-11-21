import { useState,useEffect } from "react";
import { Container, Heading, Grid, Flex, Box } from "@chakra-ui/react";
import Cards from "../components/Cards.jsx";
import { fetchTrending } from "../services/api.js";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [timeWindow, setTimeWindow] = useState("day");

  

  useEffect(() => {
      fetchTrending(timeWindow)
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.error(error);
      });
   }, [timeWindow]) ;
   console.log(data);


  return (
    <Container maxW={"container.xl"}>
      <Flex alignItems={"baseline"} gap={"4"} my={"10"}>
        <Heading as={"h2"} fontSize={"md"} textTransform={"uppercase"}>
          Trend Olanlar
        </Heading>
        <Flex alignItems={"center"} gap={"2"} border={"1px solid teal"} borderRadius={"20px"}>
          <Box as="button" px="3" py="1" borderRadius={"20px"} onClick={() => setTimeWindow("day")}>Bugün</Box>
          <Box as="button" px="3" py="1" borderRadius={"20px"}
            onClick={() =>  setTimeWindow("week") }>Bu Hafta</Box>
        </Flex>
      </Flex>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={"4"}
        >
        {data && data?.map((item) => 
          <Cards key={item?.id} item={item}  />
        )}
      </Grid>

    </Container>
  );
};

export default HomePage;