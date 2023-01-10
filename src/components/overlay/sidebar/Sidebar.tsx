import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

import { animations, AnimationWrapper } from "components";
import { useSidebar } from "context";
import { useIsMobile, useModifySidebarBasedOnDevice, useSidebarUtils } from "hooks";

interface Props {
  SmallSidebarContent: ReactNode;
  ExpandedSidebarContent: ReactNode;
}

export const Sidebar = ({ SmallSidebarContent, ExpandedSidebarContent }: Props) => {
  useSidebarUtils();

  const { sidebarState, placement } = useSidebar();
  const { isMobile } = useIsMobile();
  const { modifyBasedOnDevice, modifyOnClick } = useModifySidebarBasedOnDevice();

  useEffect(() => {
    modifyBasedOnDevice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <AnimatePresence initial={false}>
      {sidebarState === "mobile" && (
        <>
          <AnimationWrapper
            id="sidebar"
            key="mobile-app-sidebar-wrapper"
            variants={animations.sidebar.mobile(placement)}
            className={clsx(
              "fixed top-0 z-[1200] flex h-full w-64 flex-col bg-white",
              placement === "right" ? "right-0" : "left-0"
            )}
          >
            <div className="flex h-full flex-col justify-between py-6 px-3">
              {ExpandedSidebarContent}
            </div>
          </AnimationWrapper>
          {/* <AnimationWrapper
            key="mobile-app-sidebar-overlay"
            id="overlay"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.5,
            }}
            transition={{ duration: 0.4, ease: "linear" }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarState(isMobile ? "closed" : "small")}
            className="absolute inset-0 z-[5000] h-auto w-full bg-gray-500"
          /> */}
        </>
      )}

      {(sidebarState === "expanded" || sidebarState === "small") && (
        <>
          <AnimatePresence mode="wait" initial={false}>
            {sidebarState === "small" && (
              <AnimationWrapper
                key="small-sidebar-chevron-icon-wrapper"
                className={clsx(
                  "shadow-notLeft rounded-r-xl p-2 z-[1201] cursor-pointer bg-white hover:bg-slate-100 fixed top-[4rem] left-[6.5rem]"
                )}
                onClick={modifyOnClick}
                variants={animations.sidebar.sideButton}
              >
                <AnimationWrapper
                  child
                  key="small-sidebar-chevron-icon"
                  variants={animations.smallScale}
                >
                  <HiChevronDoubleRight className="h-7 w-7 fill-slate-700 hover:fill-slate-800" />
                </AnimationWrapper>
              </AnimationWrapper>
            )}
          </AnimatePresence>
          <AnimationWrapper
            id="sidebar"
            key="app-sidebar-expanded-small-wrapper"
            className={clsx(
              "top-8 flex h-[94vh] before:rounded-xl bg-white rounded-xl shadow-lg flex-col ml-2 z-[1200] fixed"
            )}
            animate={{
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                // delay: 0.7,
              },
              width: sidebarState === "expanded" ? "18rem" : "6rem",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {sidebarState === "expanded" ? (
                <AnimationWrapper
                  className="flex h-full flex-col justify-between py-6 px-3"
                  key="extended-app-sidebar-content"
                  variants={animations.sidebar.content}
                >
                  {ExpandedSidebarContent}
                </AnimationWrapper>
              ) : (
                <AnimationWrapper
                  key="small-app-sidebar-content"
                  className="flex h-full flex-col justify-between items-start pr-3 py-6 pl-5"
                  variants={animations.sidebar.content}
                >
                  {SmallSidebarContent}
                </AnimationWrapper>
              )}
            </AnimatePresence>
          </AnimationWrapper>
        </>
      )}
    </AnimatePresence>
  );
};
