import React from "react";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import Sidebar from "@/components/layouts/mainLayout/Sidebar";
import Header from "@/components/layouts/mainLayout/Header";

/**
 * @component MainLayout exports a Box Component for the MainLayout with a sidebar and header
 * @param children - The child component that gets displayed
 * @returns {ReactElement} MainLayout component
 */
const MainLayout = ({ children, isReadOnly = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Header onOpen={() => console.log("Opened")} isReadOnly={isReadOnly} />
      <Box
        position="fixed"
        left={0}
        top={0}
        right={0}
        zIndex={20} // Ensures the header is above other content
      >
        <Sidebar onClose={() => onClose} isReadOnly={isReadOnly} />
      </Box>
      <Box ml={{ base: 0, md: 60 }} p="4" marginTop="20px">
        {children}
      </Box>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} isReadOnly={isReadOnly} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MainLayout;
