import React, { useState } from 'react';
import { Box, Heading, List, ListItem, Text, Button, Icon, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { ArrowBackIcon, StarIcon, ViewIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const ReleaseDetails = ({ releaseData }) => {
  const [visibleReleases, setVisibleReleases] = useState(5);
  const router = useRouter();
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  const loadMoreReleases = () => {
    setVisibleReleases(prev => prev + 5);
  };

  return (
    <Box padding="10" maxWidth={{ base: "90vw", md: "800px" }} margin="auto" marginTop={10} bg={bgColor} boxShadow="lg" borderRadius="md">
      <Button colorScheme="teal" size="sm" onClick={() => router.back()} margin="4" leftIcon={<ArrowBackIcon />}>
        Back
      </Button>
      {releaseData && releaseData.length > 0 && (
        <Box>
          <Heading as="h2" size="lg" textAlign="center" mt="5" mb="2" color={textColor}>Track Listing</Heading>
          <List spacing={3}>
            {releaseData.slice(0, visibleReleases).map((data, index) => (
              <ListItem key={index} paddingX="6" paddingY="4" borderBottom="1px" borderColor="gray.200" bg={bgColor} borderRadius="md" boxShadow="md">
                <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
                  <Flex alignItems="center" flex="1 1 auto">
                    <Image
                      src={data.thumb || "https://via.placeholder.com/50?text=No+Image"}
                      alt={`Image for ${data.title}`}
                      boxSize={{ base: "40px", md: "50px" }}
                      objectFit="cover"
                      borderRadius="full"
                      mr="4"
                    />
                    <Box>
                      <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold">{data.title}</Text>
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">Artist: {data.artist}</Text>
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">Format: {data.format}</Text>
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">Year: {data.year}</Text>
                    </Box>
                  </Flex>
                  <Flex direction="column" alignItems="flex-end" flex="0 0 auto" ml={{ base: 0, md: 4 }} mt={{ base: 2, md: 0 }}>
                    <Box display="flex" alignItems="center">
                      <Icon as={StarIcon} color="yellow.400" mr="2" />
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">{data.stats.community.in_wantlist} want</Text>
                    </Box>
                    <Box display="flex" alignItems="center" mt="2">
                      <Icon as={ViewIcon} color="green.500" mr="2" />
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">{data.stats.community.in_collection} own</Text>
                    </Box>
                  </Flex>
                </Flex>
              </ListItem>
            ))}
          </List>
          {visibleReleases < releaseData.length && (
            <Flex justifyContent="center" mt="4">
              <Button colorScheme="teal" onClick={loadMoreReleases}>
                Load More
              </Button>
            </Flex>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ReleaseDetails;
