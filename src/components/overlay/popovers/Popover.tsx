import * as PopoverPrimitive from "@radix-ui/react-popover";
import clsx from "clsx";
import React from "react";

import { AnimationWrapper, animations } from "components";

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, key, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <AnimationWrapper key={`popover_${key}`} variants={animations.popoverEffect}>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={clsx(
          "z-50 w-80 rounded-lg",
          "bg-white",
          "p-3 shadow-lg outline-none overflow-hidden",
          // "animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          "dark:border-slate-800 dark:bg-slate-800",
          className
        )}
        {...props}
      />
    </AnimationWrapper>
  </PopoverPrimitive.Portal>
));
