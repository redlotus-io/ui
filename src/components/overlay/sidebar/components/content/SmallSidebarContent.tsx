import clsx from "clsx";
import { HiMenu } from "react-icons/all";

import { AnimationWrapper, animations, SidebarIconLink } from "components";
import { useModifySidebarBasedOnDevice } from "hooks";
import { Router } from "types";
interface Props {
  appLogo: string;
  routes: Router[];
  BottomContent?: React.ReactNode;
}

export const SmallSidebarContent = ({ appLogo, routes, BottomContent }: Props) => {
  const { modifyOnClick } = useModifySidebarBasedOnDevice();

  return (
    <>
      <div className={clsx("flex flex-col items-center justify-center")}>
        <div className="min-h-[3.5rem] min-w-[3.5rem]">
          <img className="h-14 w-14" src={appLogo} alt="icon" />
        </div>
        <div className="mt-6 mb-4">
          <button className="rounded-md p-3 hover:bg-slate-100 mt-6 mb-4" onClick={modifyOnClick}>
            <AnimationWrapper keyIndex="small-sidebar-x-icon" variants={animations.smallScale}>
              <HiMenu className="h-7 w-7 fill-slate-700 hover:fill-slate-800" />
            </AnimationWrapper>
          </button>
        </div>
        <div className="z-[998] h-full space-y-4">
          {routes.map(({ smallIcon, to, tooltip, routeName }) => (
            <SidebarIconLink
              key={to}
              to={to}
              tooltip={tooltip ? tooltip : routeName.toLowerCase()}
              icon={smallIcon}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">{BottomContent}</div>
    </>
  );
};
