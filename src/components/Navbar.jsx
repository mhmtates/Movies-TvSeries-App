import { Box, Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Box py="4" mb="2">
            <Container maxW={"container.xl"}>
                <Flex justifyContent={"space-between"}>
                    <Link to='/'>
                        <Box fontSize={"2xl"} fontWeight={"bold"}
                            color={"red"}
                            letterSpacing={"widest"}
                            fontFamily={"mono"}
                        >
                            DIGITALWORLD
                        </Box>
                    </Link>
                    <Flex gap="4" alignItems={"center"}>
                        <Link to="/">Anasayfa</Link>
                        <Link to="/diziler">Diziler</Link>
                        <Link to="/filmler">Filmler</Link>
                        <Link to="/ara">Ara</Link>
                        
                    </Flex>

                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar