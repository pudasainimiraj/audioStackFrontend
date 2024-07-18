import React, { FC } from "react";
import {
  Button,
  IconButton,
  Center,
  ButtonProps,
  Tooltip,
  Menu,
  MenuButton,
  MenuItem,
  Text,
  MenuList,
  Portal,
  TooltipProps,
} from "@chakra-ui/react";

type CustomIconButtonProps = ButtonProps & {
  icon: React.ReactElement;
  ariaLabel: string;
  noHoverEffect?: boolean;
  placement?;
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

type CustomMenuButtonProps = ButtonProps & {
  items: {
    key: string;
    value: string[];
    onClick: () => void;
    icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    isDisabled?: boolean;
    tooltip?: string;
    tooltipPlacement?: TooltipProps["placement"]; // Using the placement type from TooltipProps
  }[];
  ariaLabel: string;
  text?: string;
  icon?: React.ReactElement;
  isIconButton?: boolean;
  iconHasArrow?: boolean;
  iconPlacement?: TooltipProps["placement"];
};

// export const CustomMenuButton: FC<CustomMenuButtonProps> = ({
//   items,
//   text,
//   icon,
//   ariaLabel,
//   isIconButton = false,
//   iconHasArrow = false,
//   iconPlacement = "left-start",
//   ...props
// }) => (
//   <Menu>
//     {isIconButton ? (
//       <Tooltip
//         hasArrow={iconHasArrow}
//         label={ariaLabel}
//         fontSize={"xs"}
//         placement={iconPlacement}
//       >
//         <MenuButton
//           as={IconButton}
//           aria-label={ariaLabel}
//           icon={icon}
//           {...commonButtonProps}
//           {...props}
//         />
//       </Tooltip>
//     ) : (
//       <MenuButton as={Button} leftIcon={icon} {...commonButtonProps} {...props}>
//         {text || ariaLabel}
//       </MenuButton>
//     )}
//     <Portal>
//       <MenuList sx={{ ...menuListStyles }}>
//         {items.map((item) =>
//           item.isDisabled ? (
//             <Tooltip
//               key={item.key}
//               label={item.tooltip || ""}
//               hasArrow
//               placement={item.tooltipPlacement || "top"}
//             >
//               <span>
//                 <MenuItem icon={item.icon} isDisabled>
//                   <Text fontSize={"xs"}>
//                     <b
//                       style={{
//                         fontWeight: item.value.length === 1 ? "normal" : "bold",
//                       }}
//                     >
//                       {item.value[0]}
//                     </b>
//                     {item.value.length > 1 && `: ${item.value[1]}`}
//                   </Text>
//                 </MenuItem>
//               </span>
//             </Tooltip>
//           ) : (
//             <MenuItem key={item.key} onClick={item.onClick} icon={item.icon}>
//               <Text fontSize={"xs"}>
//                 <b
//                   style={{
//                     fontWeight: item.value.length === 1 ? "normal" : "bold",
//                   }}
//                 >
//                   {item.value[0]}
//                 </b>
//                 {item.value.length > 1 && `: ${item.value[1]}`}
//               </Text>
//             </MenuItem>
//           )
//         )}
//       </MenuList>
//     </Portal>
//   </Menu>
// );
