import clsx from "clsx";

import { useSidebar } from "context";
import { useIsMobile } from "hooks";

interface Props {
  /**
   * Main content
   */
  children: React.ReactNode;
  Sidebar: React.ReactNode;
  MobileContent: React.ReactNode;
  /**
   * Column on the right side of the screen
   */
  RightSide?: React.ReactNode;
}

export const PartialPageWrapper = ({ children, RightSide, Sidebar, MobileContent }: Props) => {
  const { isMobile } = useIsMobile();
  const { sidebarState } = useSidebar();

  return (
    <>
      {isMobile ? (
        <>
          <div
            id="main-content"
            className={clsx(
              "flex min-h-screen min-w-full justify-center bg-slate-50",
              sidebarState === "openWithOverlay" && "h-full overflow-hidden",
              "py-32 pb-[6.5rem]"
            )}
          >
            <div className="flex h-full w-full flex-col">{MobileContent}</div>
          </div>
          {Sidebar}
        </>
      ) : (
        <div id="main-content" className="flex min-h-screen w-full bg-slate-50">
          <div className="flex justify-start">{Sidebar}</div>
          <div
            className={clsx(
              "w-full py-8 px-6",
              (sidebarState === "expanded" || sidebarState === "small") && "ml-[6.5rem]"
            )}
          >
            {children}
          </div>
          {RightSide && <>{RightSide}</>}
        </div>
      )}
    </>
  );
};
