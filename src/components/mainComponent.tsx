import ArtistsList from "./artistListComponent";
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
