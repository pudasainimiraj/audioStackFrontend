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
  Editor: "Library",
  Browse: "Database",
  Saved: "Saved Releases",
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
    name: LinkItemsNames.Editor,
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
type SidebarProps = {
  onClose: () => void;
  isReadOnly?: boolean;
};

const RenderNavItem = (link: LinkItemProps) => {
  const router = useRouter();
  return (
    <NavItem
      key={link.name}
      icon={link.icon}
      linkTo={link.linkTo}
      isActive={router.pathname === `/${link.linkTo}`}
      isDisabled={true}
    >
      {link.name}
    </NavItem>
  );
};

  

/**
 *@component Sidebar component
 * @returns {ReactElement} Sidebar component
 */
const Sidebar: React.FC<SidebarProps> = ({ onClose }) => { 

  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return ( <Box
      bg={bg}
      borderRight="1px"
      borderRightColor={borderColor}
      w={{ base: "full", md: 60 }}  // Adjust width responsively
      pos="fixed"
      zIndex={200}
      h="full"
      transition="3s ease"
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        mt="50"
        mb={{ base: 25, md: 50 }}  // Responsive margin
        fontSize={{ base: "2xl", md: "3xl" }}  // Responsive font size
        letterSpacing="tight"
      >
      <Image
        boxSize="120px"
        src="https://via.placeholder.com/150"
        alt="user-logo"
        borderRadius="full" // This makes the image circular
      />
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>
    {LinkItems.map((link) => RenderNavItem(link))}
  </Box>);

}

export default Sidebar;
