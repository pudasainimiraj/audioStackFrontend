import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FiHome,
  FiDatabase,
  FiFolder,
  FiSettings,
  FiBarChart,
} from "react-icons/fi";
import { useRouter } from "next/router";
import NavItem from "@/components/layouts/mainLayout/NavItem";
// import capitalize from "@frontend/src/editor/settings/utils/capitalize";

/**
 * @typedef LinkItemProps
 * @property {string} name - Name of the link item
 * @property {IconType} icon - Icon of the link item
 * @property {string} linkTo - Link to the link item
 * Type for the LinkItemProps
 */
type LinkItemProps = {
  name: string;
  icon: IconType;
  linkTo: string;
};

/**
 * Link item names for the sidebar
 */
const LinkItemsNames = {
  Home: "Home",
  Editor: "Editor",
  Browse: "Browse",
  Saved: "Saved",
  Settings: "Settings",
};

/**
 * Array of LinkItemProps
 */
const LinkItems: Array<LinkItemProps> = [
  {
    name: LinkItemsNames.Home,
    icon: FiHome,
    linkTo: LinkItemsNames.Home,
  },
  {
    name:LinkItemsNames.Editor,
    icon: FiBarChart,
    linkTo: LinkItemsNames.Editor,
  },
  {
    name: LinkItemsNames.Browse,
    icon: FiDatabase,
    linkTo: LinkItemsNames.Browse,
  },
  {
    name: LinkItemsNames.Saved,
    icon: FiFolder,
    linkTo: LinkItemsNames.Saved,
  },
  {
    name: LinkItemsNames.Settings,
    icon: FiSettings,
    linkTo: LinkItemsNames.Settings,
  },
];

/**
 * @typedef SidebarProps
 * @property {() => void} onClose - Function to close the sidebar
 * Type for the SidebarProps
 */

const RenderNavItem = (link: LinkItemProps, isDisabled = false) => {
  const router = useRouter();
  return (
    <NavItem
      key={link.name}
      icon={link.icon}
      linkTo={link.linkTo}
      isActive={router.pathname === `/${link.linkTo}`}
      isDisabled={isDisabled}
    >
      {link.name}
    </NavItem>
  );
};

/**
 *@component Sidebar component
 * @returns {ReactElement} Sidebar component
 */
const Sidebar = ({ onClose , isReadOnly = false }): React.JSX.Element => (
  <Box
    transition="3s ease"
    bg={useColorModeValue("white", "gray.900")}
    borderRight="1px"
    borderRightColor={useColorModeValue("gray.200", "gray.700")}
    w={{ base: "full", md: 60 }}
    pos="fixed"
    zIndex={200}
    h="full"
  >
    <Flex
      h="20"
      alignItems="center"
      mx="8"
      justifyContent="space-between"
      mt={50}
      mb={[25, 50, 100]}
      fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
      alignSelf="center"
      letterSpacing="tight"
      zIndex={200}
    >
      <Image boxSize="120px" src="/logo.png" alt="user-logo" />
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>
    {LinkItems.map((link) => RenderNavItem(link, isReadOnly))}
  </Box>
);

export default Sidebar;