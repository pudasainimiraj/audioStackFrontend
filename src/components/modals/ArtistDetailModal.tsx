import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Image,
  Box
} from '@chakra-ui/react';

interface ArtistDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  artist: {
    title: string;
    cover_image: string;
    thumb: string;
    description?: string;  // Assuming you might have a description field in some cases
  }
}

const ArtistDetailsModal: React.FC<ArtistDetailsModalProps> = ({
  isOpen,
  onClose,
  artist
}) => {
  const imageUrl = artist.cover_image || artist.thumb || "https://via.placeholder.com/150"; // Fallback image URL
  const defaultDescription = "No additional information available."; // Default description if none provided

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{artist.title || "Unknown Artist"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box textAlign="center" mb={4}>
            <Image 
              src={imageUrl} 
              alt={`Image of ${artist.title}`} 
              fallbackSrc="https://via.placeholder.com/150" // Fallback src if image fails to load
            />
          </Box>
          <Text fontSize="md">{artist.description || defaultDescription}</Text>
          {/* Additional dynamic details can be added here */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ArtistDetailsModal;
