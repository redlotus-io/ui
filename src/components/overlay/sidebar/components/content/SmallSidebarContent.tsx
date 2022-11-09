import clsx from "clsx";

import { SidebarIconLink } from "components";
import { Router } from "types";
interface Props {
  appLogo: string;
  routes: Router[];
  BottomContent?: React.ReactNode;
}

export const SmallSidebarContent = ({ appLogo, routes, BottomContent }: Props) => {
  return (
    <>
      <div className={clsx("flex flex-col items-center justify-center")}>
        <div className="min-h-[3.5rem] min-w-[3.5rem]">
          <img className="h-14 w-14" src={appLogo} alt="icon" />
        </div>
        <div className="z-[998] h-full space-y-4 mt-8">
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
