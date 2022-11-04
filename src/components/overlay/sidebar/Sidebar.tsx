import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, ReactNode } from "react";

import { AnimationWrapper } from "components";
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

  console.log("sidebarState", sidebarState);

  return (
    <AnimatePresence initial={false}>
      {sidebarState === "openWithOverlay" && (
        <AnimationWrapper
          id="sidebar"
          keyIndex="openWithOverlay-app-sidebar-wrapper"
          initial={{ x: placement === "right" ? "40vw" : "-40vw" }}
          animate={{
            x: "0",
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 150,
              duration: 0.5,
            },
          }}
          exit={{
            x: placement === "right" ? "25vw" : "-25vw",
            transition: {
              ease: "easeOut",
              duration: 0.2,
            },
            opacity: 0,
          }}
          className={clsx(
            "fixed top-0 z-[1200] flex h-full w-80 flex-col bg-white",
            placement === "right" ? "right-0" : "left-0"
          )}
        >
          {ExpandedSidebarContent}
        </AnimationWrapper>
      )}

      {(sidebarState === "expanded" || sidebarState === "small") && (
        <AnimationWrapper
          id="sidebar"
          keyIndex="app-sidebar-expanded-small-wrapper"
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
              <motion.div
                id="sidebar"
                className="flex h-full flex-col justify-between py-6 px-3"
                key="extended-app-sidebar-content-44"
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
              >
                {ExpandedSidebarContent}
              </motion.div>
            ) : (
              <motion.div
                id="sidebar"
                className="flex h-full flex-col justify-between items-start pr-3 py-6 pl-5"
                key="small-app-sidebar-content-44"
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeIn",
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                {SmallSidebarContent}
              </motion.div>
            )}
          </AnimatePresence>
        </AnimationWrapper>
      )}
    </AnimatePresence>
  );
};
