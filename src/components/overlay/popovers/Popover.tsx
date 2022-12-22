import { Popover as HeadlessPopover } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";

import { AnimationWrapper, animations } from "components";

import { PopoverButton, PopoverProps } from ".";

export const Popover = ({ children, action, animKey }: PopoverProps) => {
  return (
    <HeadlessPopover className="z-[1301]">
      {({ open }) => (
        <>
          <PopoverButton>{action}</PopoverButton>
          <AnimatePresence>
            {open && (
              <AnimationWrapper key={`popover_${animKey}`} variants={animations.popoverEffect}>
                <HeadlessPopover.Panel
                  static
                  className="absolute flex overflow-hidden flex-col p-3 text-2xl font-bold bg-white rounded-lg shadow-lg"
                >
                  <div className="">{children}</div>
                </HeadlessPopover.Panel>
              </AnimationWrapper>
            )}
          </AnimatePresence>
        </>
      )}
    </HeadlessPopover>
  );
};
