import React from 'react';
import { Box, Image, Text, useColorModeValue, Flex } from '@chakra-ui/react';
import Link from 'next/link'; 

interface InfoCardProps {
  artist: {
    id: number;
    title: string;
    thumb: string;
    cover_image: string;
    resource_url: string;
    uri: string;
  };
}

const InfoCard: React.FC<InfoCardProps> = ({ artist }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Link href={`/release?releaseId=${artist.id}`} passHref>
      <Flex
        as="a" // Ensures the Flex component acts as an anchor tag
        width="250px"
        height="350px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        bg={bgColor}
        boxShadow="md"
        transition="0.3s"
        _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
        direction="column"
        cursor="pointer"
        align="center"
        justify="center"
      >
        <Image
          src={artist.cover_image || artist.thumb || 'https://via.placeholder.com/150'}
          alt={`Image for ${artist.title}`}
          objectFit="cover"
          width="100%"
          height="60%"
        />
        <Box p="4" width="100%" height="40%">
          <Text fontSize="lg" fontWeight="bold" isTruncated>
            {artist.title}
          </Text>
          <Text fontSize="md" color={textColor} isTruncated>
            {artist.title || 'Unknown Artist'}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default InfoCard;
