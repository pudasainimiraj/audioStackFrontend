import React, { FC } from "react";
import {
  Button,
  IconButton,
  Center,
  ButtonProps,
  Tooltip,
} from "@chakra-ui/react";

type CustomIconButtonProps = ButtonProps & {
  icon: React.ReactElement;
  ariaLabel: string;
  noHoverEffect?: boolean;
  placement?: any;
  hasArrow?: boolean;
};

/**
 * commonButtonProps are the common props for the buttons
 */
export const commonButtonProps = {
  size: "sm",
  variant: "unstyled",
  borderRadius: "0",
  _hover: { bg: "#ebedf0", transform: "none" },
  _active: {
    bg: "#dddfe2",
    transform: "scale(0.98)",
    borderColor: "#bec3c9",
  },
  _focus: {
    boxShadow:
      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
  },
  px: "8px",
};

/**
 * CustomIconButton component to display an icon button with a tooltip
 * @param icon - ReactElement of the icon
 * @param ariaLabel - aria-label for the button
 * @param props - props to pass to the button
 * @returns ReactElement
 */
export const CustomIconButtonWithTooltip: FC<CustomIconButtonProps> = ({
  icon,
  ariaLabel,
  placement = "left-start",
  hasArrow = true,
  ...props
}) => (
  <Tooltip
    hasArrow={hasArrow}
    label={ariaLabel}
    fontSize={"xs"}
    placement={placement}
  >
    <IconButton
      aria-label={ariaLabel}
      icon={<Center>{icon}</Center>}
      {...commonButtonProps}
      {...props}
    />
  </Tooltip>
);

/**
 * CustomIconButton component to display an icon button with a tooltip
 * @param icon - ReactElement of the icon
 * @param ariaLabel - aria-label for the button
 * @param props - props to pass to the button
 * @returns ReactElement
 */
export const CustomIconButton: FC<CustomIconButtonProps> = ({
  icon,
  ariaLabel,
  noHoverEffect = true,
  ...props
}) => {
  const buttonStyles = {
    ...commonButtonProps,
    ...(noHoverEffect
      ? {
          _hover: { bg: "none" }, // No background on hover
          _active: { bg: "none" }, // No background on active click
        }
      : {}),
  };

  return (
    <IconButton
      aria-label={ariaLabel}
      icon={<Center>{icon}</Center>}
      {...buttonStyles}
      {...props}
    />
  );
};

type CustomButtonProps = ButtonProps & {
  icon?: React.ReactElement;
  ariaLabel?: string;
  text: string;
};

/**
 * CustomButton component to display a button with an icon and text
 * @param icon - ReactElement of the icon
 * @param ariaLabel - aria-label for the button
 * @param text - text to display on the button
 * @param props - props to pass to the button]
 * @returns ReactElement
 */
export const CustomButton: FC<CustomButtonProps> = ({
  icon,
  ariaLabel,
  text,
  ...props
}) => (
  <Button
    aria-label={ariaLabel ?? text}
    leftIcon={icon}
    {...commonButtonProps}
    {...props}
  >
    {text}
  </Button>
);