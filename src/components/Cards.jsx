
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import { imagePath } from "../services/api";

const Cards = ({ item }) => {
    return (
        <Link to="/">
            <Box>
                <Image src={`${imagePath}/${item?.poster_path}`} />
            </Box>
        </Link>
   );
};
export default Cards;