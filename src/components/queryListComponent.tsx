import React, { useContext, useRef } from "react";
import GenericCard from "@/components/cardComponent/genericCard";
import { DiscogsListContext } from "@/hooks/useDiscogProvider";
import { Box, SimpleGrid, Spinner, Text, Button, Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ArtistsList = () => {
  const context = useContext(DiscogsListContext);
  const scrollRef = useRef(null);
  const showFullPagination = useBreakpointValue({ base: false, md: true });

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

  if (loading) return <Box textAlign="center" p={5}><Spinner size="xl" /></Box>;
  if (!results.length) return <Box textAlign="center" p={5}><Text fontSize="lg">No artists found</Text></Box>;


  // Generate page buttons for navigation
  const pageNumbers = [];
  for (let i = 1; i <= pagination.pages; i++) {
    pageNumbers.push(i);
  }

  

  return (
    <Box padding={4}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="20px">
      {results.map((artist) => (
        <Box
          key={artist.id}
          minW={{ base: "150px", sm: "250px" }}
          maxW="300px"
          height="300px"
          bg="white"
          boxShadow="sm"
          borderRadius="md"
          overflow="hidden"
        >
          <GenericCard artist={artist} />
        </Box>
      ))}
    </SimpleGrid>

       <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      my={{ base: 4, md: 2 }}  // More vertical space on small screens
    >
      <Button
        onClick={() => handlePageChange(Math.max(1, pagination.page - 1))}
        leftIcon={<ChevronLeftIcon />}
        isDisabled={pagination.page <= 1}
        mb={{ base: 2, md: 0 }}  // Extra margin-bottom on small screens
      >
        Prev
      </Button>
      {showFullPagination && (
        <Box ref={scrollRef} onWheel={handleWheel} display="flex" overflow="hidden" maxWidth="300px" px={2}>
          <HStack spacing={2}>
            {pageNumbers.map((number) => (
              <Button key={number} size="sm" onClick={() => handlePageChange(number)} isActive={number === pagination.page} variant="outline">
                {number}
              </Button>
            ))}
          </HStack>
        </Box>
      )}
      <Button
        onClick={() => handlePageChange(Math.min(pagination.pages, pagination.page + 1))}
        rightIcon={<ChevronRightIcon />}
        isDisabled={pagination.page >= pagination.pages}
        mt={{ base: 2, md: 0 }}  // Extra margin-top on small screens for 'Next' button
      >
        Next
      </Button>
    </Flex>
    </Box>
  );
};

export default ArtistsList;
