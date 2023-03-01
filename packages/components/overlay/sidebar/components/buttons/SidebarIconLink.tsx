import clsx from "clsx";
import { motion } from "framer-motion";
import { HTMLProps, ReactNode } from "react";

import { animations, AnimationWrapper, LotusLink, SidebarTooltip } from "@/components";

interface SidebarItemProps {
  icon: ReactNode;
  tooltip: string;
  children?: string;
  to?: string;
}

interface ContentProps {
  icon: ReactNode;
  tooltip: string;
  isActive?: boolean;
  children?: string;
}

type Props = SidebarItemProps & HTMLProps<HTMLDivElement>;

const Content = ({ children, icon, tooltip, isActive = false }: ContentProps) => {
  return (
    <motion.div
      whileHover="whileHover"
      whileTap="whileTap"
      className={clsx(
        isActive ? "bg-slate-800 hover:bg-slate-900" : "hover:bg-slate-100",
        "group relative flex cursor-pointer items-center justify-center rounded-md p-3"
      )}
    >
      <AnimationWrapper
        variants={animations.smallScale}
        child
        key="sidebar-link-icon"
        className={clsx(isActive ? "fill-white" : "fill-gray-800 group-hover:fill-slate-800")}
      >
        {icon}
      </AnimationWrapper>
      <div className="flex flex-row items-center">
        <p className="text-xl font-medium group-hover:fill-slate-800">{children}</p>
      </div>

      <SidebarTooltip tooltip={tooltip} />
    </motion.div>
  );
};

export const SidebarIconLink = ({ children, to, icon, tooltip, ...props }: Props) => {
  return (
    <div role="button" tabIndex={0} className="z-[1205]" {...props}>
      {to ? (
        <LotusLink to={to}>
          {({ isActive }: any) => (
            <Content icon={icon} tooltip={tooltip} isActive={isActive}>
              {children}
            </Content>
          )}
        </LotusLink>
      ) : (
        <Content icon={icon} tooltip={tooltip}>
          {children}
        </Content>
      )}
    </div>
  );
};
