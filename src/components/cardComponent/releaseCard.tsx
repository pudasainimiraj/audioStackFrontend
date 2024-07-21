import React from "react";
import { Box, Heading, List, ListItem, Text, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import router from "next/router";

const ReleaseDetails: React.FC<ReleaseDetailsProps> = ({ title, tracks, ownedBy }) => {
  return (
    <Box padding="10" maxWidth="800px" paddingTop="20" margin="auto" bg="white" boxShadow="xl" borderRadius="lg">
      <Button colorScheme="teal" size="sm" onClick={() => router.back()} margin="4" leftIcon={<ArrowBackIcon />} />
      <Heading as="h1" size="xl" textAlign="center" marginTop="4">{title}</Heading>
      <Text fontSize="lg" textAlign="center" color="gray.600" my="2">
        Owned by {ownedBy} people on Discogs
      </Text>
      {tracks && tracks.length > 0 && (
        <Box>
          <Heading as="h2" size="lg" textAlign="center" mt="5" mb="2">Track listing</Heading>
          <List spacing={3}>
            {tracks.map((track, index) => (
              <ListItem key={index} paddingX="6" paddingY="2" borderBottom="1px" borderColor="gray.200">
                <Text fontSize="md" fontWeight="bold">{track.title} - {track.duration}</Text>
                <Text fontSize="sm" color="gray.500">Artists: {track.artists.map(artist => artist.name).join(", ")}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default ReleaseDetails;
