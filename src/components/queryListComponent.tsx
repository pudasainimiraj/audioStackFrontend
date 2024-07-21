import React, { useContext, useRef } from "react";
import GenericCard from "@/components/cardComponent/genericCard";
import { DiscogsListContext } from "@/hooks/useDiscogProvider";
import { Box, SimpleGrid, Spinner, Text, Button, Flex, HStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ArtistsList = () => {
  const context = useContext(DiscogsListContext);
  const scrollRef = useRef(null);

  if (!context) {
    return (
      <Box textAlign="center" p={5}>
        <Text fontSize="lg">Context not available</Text>
      </Box>
    );
  }

  const { results, loading, pagination, fetchData, searchTerm } = context;

  const handlePageChange = (page) => {
    fetchData(searchTerm, page);
  };

  // Function to handle horizontal scrolling with mouse wheel
  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" p={5}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!results.length) {
    return (
      <Box textAlign="center" p={5}>
        <Text fontSize="lg">No artists found</Text>
      </Box>
    );
  }

  // Generate page buttons for navigation
  const pageNumbers = [];
  for (let i = 1; i <= pagination.pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} p={5} paddingTop={15}>
        {results.map((artist) => (
          <Box key={artist.id} onClick={() => console.log(artist.id)} cursor="pointer" width="250px" height="350px" overflow="hidden">
            <GenericCard artist={artist} />
          </Box>
        ))}
      </SimpleGrid>
      <Flex justifyContent="center" mt="4" alignItems="center">
        <Button onClick={() => handlePageChange(Math.max(1, pagination.page - 1))} leftIcon={<ChevronLeftIcon />} isDisabled={pagination.page <= 1} mr="2">
          Prev
        </Button>
        <Box ref={scrollRef} onWheel={handleWheel} display="flex" maxWidth="300px" overflow="hidden">
          <HStack spacing={2}>
            {pageNumbers.map((number) => (
              <Button key={number} size="sm" onClick={() => handlePageChange(number)} isActive={number === pagination.page} variant="outline">
                {number}
              </Button>
            ))}
          </HStack>
        </Box>
        <Button onClick={() => handlePageChange(Math.min(pagination.pages, pagination.page + 1))} rightIcon={<ChevronRightIcon />} isDisabled={pagination.page >= pagination.pages}>
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default ArtistsList;
