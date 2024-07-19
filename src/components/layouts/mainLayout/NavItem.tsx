import React, { ReactText } from "react";
import { Flex, Icon, Link, FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import NextLink from "next/link";

/**
 * @typedef NavItemProps
 * @property {IconType} icon - Icon to be displayed
 * @property {ReactText} children - Text to be displayed
 * @property {string} linkTo - Link to be navigated to
 * Type for the NavItemProps
 */
type NavItemProps = FlexProps & {
  icon: IconType;
  children: ReactText;
  linkTo: string;
  isDisabled?: boolean;
  isActive?: boolean;
};

/**
 * Nav item component for the sidebar
 * @param icon - Icon to be displayed
 * @param linkTo - Link to be navigated to
 * @returns {ReactElement} NavItem component
 */
const NavItem = ({
  icon,
  linkTo,
  children,
  isDisabled,
  isActive,
  ...rest
}: NavItemProps) => {
  if (isDisabled) {
    return (
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        _hover={{
          bg: "gray.400",
          color: "white",
        }}
        role="group"
        cursor="not-allowed"
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    );
  }

  return (
    <Link
      as={NextLink}
      href={linkTo}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        bg={isActive ? "gray.200" : undefined}
        color={isActive ? "black" : undefined}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
