import React from "react";
import { Box } from "@chakra-ui/react";
import ArtistsList from "@/components/artistListComponent";

const Landing = () => {
  return (
    <Box
      textAlign="center"
      mt={{ base: 2, md: 3 }} // More margin-top on larger screens
      p={{ base: 3, md: 5 }} // Responsive padding
      overflow="hidden"
      height={{ base: "auto", md: "92vh" }} // Full height on larger screens, auto on smaller devices
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <ArtistsList />
    </Box>
  );
};

export default Landing;
