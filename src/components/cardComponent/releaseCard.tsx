import React, { useState } from 'react';
import { Box, Heading, List, ListItem, Text, Button, Icon, Flex } from '@chakra-ui/react';
import { ArrowBackIcon, StarIcon, ViewIcon } from '@chakra-ui/icons';
import router from 'next/router';

const ReleaseDetails = ({ releaseData }) => {
  const [visibleReleases, setVisibleReleases] = useState(5);

  const loadMoreReleases = () => {
    setVisibleReleases(prev => prev + 5);
  };

  return (
    <Box padding="10" maxWidth={{ base: "90vw", md: "800px" }} margin="auto">
      <Button colorScheme="teal" size="sm" onClick={() => router.back()} margin="4" leftIcon={<ArrowBackIcon />}>
        Back
      </Button>
      {releaseData && releaseData.length > 0 && (
        <Box>
          <Heading as="h2" size="lg" textAlign="center" mt="5" mb="2">Track Listing</Heading>
          <List spacing={3}>
            {releaseData.slice(0, visibleReleases).map((data, index) => (
              <ListItem key={index} paddingX="6" paddingY="2" borderBottom="1px" borderColor="gray.200">
                <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                    <Text fontSize="md" fontWeight="bold">{data.title} - {data.duration}</Text>
                    <Text fontSize="sm" color="gray.500">Artists: {data.artist}</Text>
                  </Box>
                  <Flex direction="column" alignItems="flex-end">
                    <Box display="flex" alignItems="center">
                      <Icon as={StarIcon} color="yellow.400" mr="2" />
                      <Text fontSize="sm" color="gray.600">{data.stats.community.in_wantlist} want</Text>
                    </Box>
                    <Box display="flex" alignItems="center" mt="2">
                      <Icon as={ViewIcon} color="green.500" mr="2" />
                      <Text fontSize="sm" color="gray.600">{data.stats.community.in_collection} own</Text>
                    </Box>
                  </Flex>
                </Flex>
              </ListItem>
            ))}
          </List>
          {visibleReleases < releaseData.length && (
            <Button colorScheme="teal" onClick={loadMoreReleases} mt="4">
              Load More
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ReleaseDetails;
