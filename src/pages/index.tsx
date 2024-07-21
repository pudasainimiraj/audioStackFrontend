import React from "react";
import { Box } from "@chakra-ui/react";
import ArtistsList from "@/components/queryListComponent";

const Landing = () => {
  return (
      <Box textAlign="center" mt={3} p={5} overflow="hidden" height="92vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <ArtistsList />
    </Box>
  );
};

export default Landing;
