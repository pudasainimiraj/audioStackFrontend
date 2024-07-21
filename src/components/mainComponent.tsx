import ArtistsList from "./queryListComponent";
import { Box } from "@chakra-ui/react";

const Landing = () => {
  return (
    <>
        <Box textAlign="center" p={5}>
       <ArtistsList />
      </Box>
        
    </>
  );
};

export default Landing;
