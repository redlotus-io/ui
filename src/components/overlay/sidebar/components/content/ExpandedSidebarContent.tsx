import { HiX } from "react-icons/hi";

import { AnimationWrapper, SidebarLink, animations } from "components";
import { useIsMobile, useModifySidebarBasedOnDevice } from "hooks";
import { Router } from "types";

interface Props {
  appLogo: string;
  routes: Router[];
  BottomContent?: React.ReactNode;
}

export const ExpandedSidebarContent = ({ appLogo, routes, BottomContent }: Props) => {
  const { modifyOnClick } = useModifySidebarBasedOnDevice();
  const { isMobile } = useIsMobile();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between px-3">
          <div className="min-h-[3.5rem] min-w-[3.5rem]">
            <img className="h-14 w-14" src={appLogo} alt="icon" />
          </div>
          <button onClick={modifyOnClick}>
            <AnimationWrapper key="expanded-sidebar-x-icon" variants={animations.scaleAndRotation}>
              <HiX className="h-12 w-12 fill-slate-700 hover:fill-slate-800" />
            </AnimationWrapper>
          </button>
        </div>
        <div className="mt-8 h-full space-y-4">
          {routes.map(({ bigIcon, to, routeName }) => {
            return (
              <>
                {isMobile ? (
                  <SidebarLink key={`${to} mobile`} to={to} icon={bigIcon}>
                    {routeName}
                  </SidebarLink>
                ) : (
                  <SidebarLink key={`${to} pc`} to={to} icon={bigIcon}>
                    {routeName}
                  </SidebarLink>
                )}
              </>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col space-y-4">{BottomContent}</div>
    </>
  );
};
