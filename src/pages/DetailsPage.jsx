
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Box, Button, CircularProgress, CircularProgressLabel, Container, Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import { fetchDetails, imagePath, imagePathOriginal } from "../services/api";
import { CalendarIcon, CheckCircleIcon, SmallAddIcon } from "@chakra-ui/icons";
import { ratingToPercentage, resolveRatingColor } from "../utils/helpers";

const DetailsPage = () => {

  const router = useParams();
  const { type, id } = router;
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetails(type, id)
      .then((response) => {
        console.log(response, "response")
        setDetails(response)
      }).catch((error) => {
        console.log(error, "error")
      }).finally(() => {
        setLoading(false);
      })
  }, [type, id]);

  if (loading) {

    return (
      <Flex justify={"center"}>
        <Spinner size={"xl"} color="red" />
      </Flex>
    )
  }

  const title = details?.title || details?.name;
  const releaseDate = type === "tv" ? details?.first_air_date : details?.release_date;

  return (

    <Box>
      <Box
        background={`linear-gradient(rgba(0,0,0,0,.88),rgba(0,0,0,0,..88),url(${imagePathOriginal}/${details.backdrop_path}))`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        w={"100%"}
        h={{ base: "auto", md: "500px" }}
        py={"2"}
        zIndex={"-1"}
        display={"flex"}
        alignItems={"center"}
      >
        <Container maxW={"container.xl"}>
          <Flex alignItems={"center"} gap="10"
            flexDirection={{ base: "column", md: "row" }}>
            <Image height={"450px"} borderRadius={"sm"} src={`${imagePath}/${details?.poster_path}`} />
            <Box>
              <Heading fontSize={"3xl"}>
                {title}{" "}
                <Text as="span" fontWeight={"normal"} color={"gray.400"} >
                  {new Date(releaseDate).getFullYear()}
                </Text>
              </Heading>
              <Flex alignItems={"center"} gap={4} mt={1} mb={5}>
                <Flex alignItems={"center"}>
                  <CalendarIcon mr={2} color={"gray.400"} />
                  <Text fontSize={"sm"} >
                    {new Date(releaseDate).toLocaleDateString("tr-TR")} 
                  </Text>
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap={"4"}>
                <CircularProgress value={ratingToPercentage(details?.vote_average)} bg="gray.800" borderRadius={"full"} p={"0.5"} size={"70px"} color={resolveRatingColor(details?.vote_average)} thickness={"6px"}>
                  <CircularProgressLabel fontSize={"lg"}>
                    {ratingToPercentage(details?.vote_average)} {" "}
                    <Box as="span" fontSize={"10px"}> % </Box>
                  </CircularProgressLabel>
                </CircularProgress>
                <Text display={{ base: "none", md: "initial" }}>
                  Seyirci Puanı
                </Text>
                <Button display={"none"} leftIcon={<CheckCircleIcon />} colorScheme="green" variant={"outline"} onClick={() => console.log("click")}>
                  Listede
                </Button>
                <Button leftIcon={<SmallAddIcon />} variant={"outline"} onClick={() => console.log("click")}>
                  Listeme Ekle
                </Button>
              </Flex>
              <Text color={"gray.400"} fontSize={"sm"} fontStyle={"italic"} my="5">{details?.tagline}
             </Text>
              <Heading fontSize={"xl"} mb={"3"}>
                Özet
              </Heading>
              <Text fontSize={"md"} mb={"3"}>
                {details?.overview.toString("tr-TR")}
              </Text>
            </Box>
          </Flex>
        </Container >
      </Box >
    </Box >
  );
};

export default DetailsPage