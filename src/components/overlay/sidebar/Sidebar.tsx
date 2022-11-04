import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useEffect, ReactNode } from "react";

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
  const { modifyBasedOnDevice } = useModifySidebarBasedOnDevice();

  useEffect(() => {
    modifyBasedOnDevice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <AnimatePresence initial={false}>
      {sidebarState === "mobile" && (
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
      )}

      {(sidebarState === "expanded" || sidebarState === "small") && (
        <AnimationWrapper
          id="sidebar"
          key="app-sidebar-expanded-small-wrapper"
          className={clsx(
            "top-8 flex h-[94vh] rounded-xl bg-white shadow-lg flex-col ml-2 z-[1200] fixed"
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
                id="sidebar"
                className="flex h-full flex-col justify-between py-6 px-3"
                key="extended-app-sidebar-content"
                variants={animations.sidebar.content}
              >
                {ExpandedSidebarContent}
              </AnimationWrapper>
            ) : (
              <AnimationWrapper
                id="sidebar"
                key="small-app-sidebar-content"
                className="flex h-full flex-col justify-between items-start pr-3 py-6 pl-5"
                variants={animations.sidebar.content}
              >
                {SmallSidebarContent}
              </AnimationWrapper>
            )}
          </AnimatePresence>
        </AnimationWrapper>
      )}
    </AnimatePresence>
  );
};
