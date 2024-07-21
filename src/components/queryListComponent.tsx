import React, { useContext } from "react";
import GenericCard from "@/components/cardComponent/genericCard";
import { DiscogsListContext } from "@/hooks/useDiscogProvider";
import { Box, SimpleGrid, Spinner, Text, Button, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ArtistsList = () => {
  const context = useContext(DiscogsListContext);

  // Check if context is undefined and handle it
  if (!context) {
    return (
      <Box textAlign="center" p={5}>
        <Text fontSize="lg">Context not available</Text>
      </Box>
    );
  }

  const { results, loading, type, pagination, fetchData } = context;

  const handleCardClick = (artistId: number) => {
    // Navigate or open modal logic here
  };

  const handlePrevPage = () => {
    if (pagination && pagination.page > 1) {
      // fetchData(pagination.search, pagination.page - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination && pagination.page < pagination.pages) {
      // fetchData(pagination.search, pagination.page + 1);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" p={5}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (type !== "artist") {
    return (
      <Box textAlign="center" p={5}>
        <Text fontSize="lg">No artist data available</Text>
      </Box>
    );
  }

  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={5}
        p={5}
        paddingTop={15}
      >
        {results.map((artist) => (
          <Box
            key={artist.id}
            onClick={() => handleCardClick(artist.id)}
            cursor="pointer"
            width="250px"
            height="350px"
            overflow="hidden"
          >
            <GenericCard artist={artist} />
          </Box>
        ))}
      </SimpleGrid>
      <Flex justifyContent="center" mt="4">
        <Button
          onClick={handlePrevPage}
          disabled={pagination.page <= 1}
          leftIcon={<ChevronLeftIcon />}
          mr="2"
        >
          Prev
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={pagination.page >= pagination.pages}
          rightIcon={<ChevronRightIcon />}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default ArtistsList;
