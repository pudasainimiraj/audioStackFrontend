import React from "react";
import {
  Flex,
  useColorModeValue,
  FlexProps,
  Box,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

// import NotificationButton from "@frontend/src/components/utilityComponent/NotificationButton";
// import FAQModal from "@frontend/src/components/pop-ups/FAQ/FAQModal";
import SearchBar from "@/components/searchBar/SearchBar";
import {
  CustomIconButton,
} from "@/components/buttons/buttons";

type HeaderProps = FlexProps & {
  onOpen: () => void;
};

const Header = ({ onOpen }: HeaderProps) => {

  return (
    <Box position="fixed" top={0} width="100%" zIndex={1} height={15}>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 200 }}
        height="50px"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent="space-between"
        // position="relative"
      >
        <CustomIconButton
          ariaLabel={"Open Menu"}
          icon={<FiMenu />}
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
        />

        <Box
          maxWidth={{ base: "100%", md: "600px", lg: "1200px" }}
          minWidth={{ base: "100%", md: "300px", lg: "600px" }}
          width="100%"
          flex={1}
          mr={12}
        >
          <SearchBar />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
