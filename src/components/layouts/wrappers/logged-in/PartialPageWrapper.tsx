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
              sidebarState === "openWithOverlay" && "h-[100vh] overflow-hidden"
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
              sidebarState === "expanded" || sidebarState === "closed" ? "ml-24" : "ml-0"
            )}
          >
            {children}
          </div>
          {RightSide && (
            <div className="hidden min-w-[20rem] flex-col items-center py-8 px-4 xl:flex 2xl:min-w-[24rem]">
              {RightSide}
            </div>
          )}
        </div>
      )}
    </>
  );
};
