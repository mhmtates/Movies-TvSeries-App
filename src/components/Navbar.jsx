import { Avatar, Box, Container, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
const Navbar = () => {

    const { user, signInWithGoogle, logout } = useAuth();

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            console.log("başarılı");
        } catch (error) {
            console.log("error", error);
        }
    };

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
                        {user && (
                            <Menu>
                                <MenuButton>
                                    <Avatar bg={"red.500"} color={"white"} size={"sm"} name={user?.email} />
                                </MenuButton>
                                <MenuList>
                                    <Link to="/">
                                        <MenuItem>İzlediklerim</MenuItem>
                                    </Link>
                                    <MenuItem onClick={logout}>Çıkış Yap</MenuItem>
                                </MenuList>

                            </Menu>
                        )}
                        {!user && (
                            <Avatar
                                size={"sm"}
                                bg={"gray.800"}
                                as="button"
                                onClick={handleGoogleLogin} />

                        )}
                    </Flex>

                </Flex>
            </Container>
        </Box>
    );
};

export default Navbar;