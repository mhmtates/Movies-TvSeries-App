
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Box, Container, Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import { fetchDetails, imagePath, imagePathOriginal } from "../services/api";

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
  //releasedate

  return (
   
    <Box>
      <Box 
      background={`linear-gradient(rgba(0,0,0,0,.88),rgba(0,0,0,0,..88),url(${imagePathOriginal}/${details.backdrop_path}))`}
      backgroundRepeat={"no-repeat"}      
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      w={"100%"}
      h={{base:"auto", md:"500px"}}
      py={"2"}
      zIndex={"-1"}
      display={"flex"}
      alignItems={"center"}
    >
        <Container maxW={"container.xl"}>
          <Flex alignItems={"center"} gap="10"
            flexDirection={{ base: "column", md: "row" }}>
            <Image height={"450px"} borderRadius={"sm"}
            
            src={`${imagePath}/${details?.poster_path}`}/>
            <Box>
              <Heading fontSize={"3xl"}>
                {title}
           {/* $release date */}
              </Heading>
            </Box>
          
          </Flex>
        </Container>
      </Box>

    </Box>
  )
}

export default DetailsPage