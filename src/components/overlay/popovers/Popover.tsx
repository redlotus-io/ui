import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { HiX } from "react-icons/all";

import { animations, AnimationWrapper } from "components";

import { PopoverProps } from "./constants";

export const Popover = ({
  children,
  animKey,
  className,
  size = "md",
  isPopoverOpen,
  setIsPopoverOpen,
  closeOnInnerClick = true,
}: PopoverProps) => {
  const popoverContainer = document.getElementById("popoverCreator");
  const popover = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeSidebar = (e: MouseEvent) => {
      e.preventDefault();

      const target = e.target as HTMLElement;

      if (
        closeOnInnerClick &&
        // target is not popoverContainer and
        target !== popoverContainer &&
        // when popoverContainer doesn't contain the click target
        !popoverContainer?.contains(target)
      ) {
        setIsPopoverOpen(false);
      } // close popover when
      else if (
        // popover is open and
        isPopoverOpen &&
        // target is not popover and
        target !== popover.current &&
        // when popover doesn't contain the click target
        !popover.current?.contains(target) &&
        // target is not popoverContainer and
        target !== popoverContainer &&
        // when popoverContainer doesn't contain the click target
        !popoverContainer?.contains(target)
      ) {
        setIsPopoverOpen(false);
      }
    };

    window.addEventListener("click", closeSidebar);
    return () => window.removeEventListener("click", closeSidebar);
  }, [isPopoverOpen]);

  return (
    <AnimatePresence>
      {isPopoverOpen && (
        <AnimationWrapper key={`popover_${animKey}`} variants={animations.popoverEffect}>
          <div
            className={clsx(
              "overflow-hidden z-[999] absolute sm:px-0",
              // @todo move these to framer motion
              // "left-1/2 -translate-x-1/4 -translate-y-20",
              { size },
              className
            )}
          >
            <div
              ref={popover}
              className="flex overflow-hidden relative flex-col p-3 text-2xl font-bold bg-white rounded-lg shadow-lg"
            >
              <div className="flex justify-end items-center">
                <AnimationWrapper key="popover-x" variants={animations.rotate360}>
                  <HiX className="w-6 h-6 fill-slate-800" onClick={() => setIsPopoverOpen(false)} />
                </AnimationWrapper>
              </div>

              {children}
            </div>
          </div>
        </AnimationWrapper>
      )}
    </AnimatePresence>
  );
};
