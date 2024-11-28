import { Button, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Pagination = ({ activePage, totalPages,setActivePage }) => {
    return (
        <Flex gap={"2"} alignItems={"center"}>
            <Flex gap={"2"} maxW={"250px"} my="10">
                <Button onClick={()=>setActivePage(activePage - 1)} isDisabled={activePage === 1}>Önceki</Button>
                <Button onClick={()=>setActivePage(activePage + 1)} isDisabled={activePage === totalPages}>Sonraki</Button>
            </Flex>
            <Flex gap="1">
                <Text>{activePage}</Text>
                <Text> / </Text>
                <Text>{totalPages}</Text>
            </Flex>
        </Flex>
    );
};
Pagination.propTypes = {
    activePage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    setActivePage : PropTypes.func.isRequired
};

export default Pagination;