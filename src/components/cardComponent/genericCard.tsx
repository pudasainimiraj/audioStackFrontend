import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageUrl }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg={bgColor} boxShadow="md">
      {imageUrl && <Image src={imageUrl} alt={`Image for ${title}`} borderRadius="md" />}
      <Box p="4">
        <Text fontWeight="bold" fontSize="xl" my="2">
          {title}
        </Text>
        <Text fontSize="md" color={textColor}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default InfoCard;
