import { Popover as HeadlessPopover } from "@headlessui/react";
import clsx from "clsx";

interface PopoverButtonProps {
  children: React.ReactNode;
}

export const PopoverButton = ({ children }: PopoverButtonProps) => {
  return (
    <HeadlessPopover.Button className={clsx("focus:outline-none focus-visible:ring-0")}>
      {children}
    </HeadlessPopover.Button>
  );
};
