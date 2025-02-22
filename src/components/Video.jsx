import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const Video = ({ id, small = false }) => {
  return (
    <Box w="100%" maxW="100%" aspectRatio={small ? 16 / 9 : 16 / 7}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: small ? "8px" : "12px" }} // Köşeleri yuvarlatma
      ></iframe>
    </Box>
  );
};

Video.propTypes = {
  id: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default Video;
