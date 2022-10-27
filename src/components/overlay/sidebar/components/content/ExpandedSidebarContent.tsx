import { HiX } from "react-icons/all";

import { AnimationWrapper, SidebarLink, animations } from "components";
import { useSidebar } from "context";
import { Router } from "types";

interface Props {
  appLogo: string;
  routes: Router[];
  BottomContent?: React.ReactNode;
}

export const ExpandedSidebarContent = ({ appLogo, routes, BottomContent }: Props) => {
  const { setSidebarState } = useSidebar();

  return (
    <div className="flex h-full flex-col justify-between py-6 px-3">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between px-3">
          <div className="min-h-[3.5rem] min-w-[3.5rem]">
            <img className="h-14 w-14" src={appLogo} alt="icon" />
          </div>
          <button className="md:hidden" onClick={() => setSidebarState("closed")}>
            <AnimationWrapper keyIndex="sidebar-x-icon" variants={animations.scaleAndRotation}>
              <HiX className="h-12 w-12 fill-slate-700 hover:fill-slate-800" />
            </AnimationWrapper>
          </button>
          <button className="hidden md:block" onClick={() => setSidebarState("small")}>
            <AnimationWrapper keyIndex="sidebar-x-icon" variants={animations.scaleAndRotation}>
              <HiX className="h-12 w-12 fill-slate-700 hover:fill-slate-800" />
            </AnimationWrapper>
          </button>
        </div>
        <div className="mt-8 h-full space-y-4">
          {routes.map(({ bigIcon, to, routeName }) => (
            <SidebarLink key={to} to={to} icon={bigIcon}>
              {routeName}
            </SidebarLink>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center space-x-3 px-4">{BottomContent}</div>
      </div>
    </div>
  );
};
