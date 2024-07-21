import React from "react";
import { Box, Drawer, DrawerContent, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "@/components/layouts/mainLayout/Sidebar";
import Header from "@/components/layouts/mainLayout/Header";

const MainLayout = ({ children, isReadOnly = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDrawer = useBreakpointValue({ base: true, md: false });

  return (
    <Box minH="100vh">
      <Header onOpen={onOpen} />
      {isDrawer ? (
        <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
          <DrawerContent>
            <Sidebar onClose={onClose} isReadOnly={isReadOnly} />
          </DrawerContent>
        </Drawer>
      ) : (
        <Box position="fixed" left={0} top={0} w="60" zIndex={20}>
          <Sidebar onClose={() => {}} isReadOnly={isReadOnly} />
        </Box>
      )}
      <Box ml={{ base: 0, md: "60" }} pt={{ base: "60px", md: "0" }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
