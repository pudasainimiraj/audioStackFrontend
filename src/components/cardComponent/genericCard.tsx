import React from "react";
import { Box, Image, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import Link from "next/link";

const InfoCard: React.FC<any> = ({ artist }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  // Determine the image source with fallbacks for empty strings
  const imageSrc = artist.cover_image && artist.cover_image !== "https://st.discogs.com/2d53d5c6d93b64024a1bd3d995bf6b340467809f/images/spacer.gif" 
                    ? artist.cover_image 
                    : (artist.thumb && artist.thumb !== "https://st.discogs.com/2d53d5c6d93b64024a1bd3d995bf6b340467809f/images/spacer.gif" 
                    ? artist.thumb 
                    : "https://via.placeholder.com/150?text=Image+Not+Available");

  return (
    <Link href={`/release?releaseId=${artist.id}`} passHref>
      <Flex
        as="a"
        width={{ base: "100%", sm: "100%", md: "250px" }} 
        height="300px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        bg={bgColor}
        boxShadow="md"
        transition="0.3s"
        _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
        direction="column"
        cursor="pointer"
        align="center"
        justify="center"
      >
        <Image
          src={imageSrc}
          alt={`Image for ${artist.title}`}
          objectFit="cover"
          width="100%"
          height="60%"
        />
        <Box p="4" width="100%" height="40%">
          <Text fontSize="lg" fontWeight="bold" isTruncated>
            {artist.title}
          </Text>
          <Text fontSize="md" color={textColor} isTruncated>
            {artist.title || "Unknown Artist"}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default InfoCard;
