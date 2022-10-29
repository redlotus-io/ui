import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { AnimationWrapper } from "components";
import { useSidebar } from "context";
import { useIsMobile } from "hooks";

interface Props {
  SmallSidebarContent: ReactNode;
  ExpandedSidebarContent: ReactNode;
}

export const Sidebar = ({ SmallSidebarContent, ExpandedSidebarContent }: Props) => {
  const { sidebarState, setSidebarState, placement, setPrevSidebarState } = useSidebar();
  const { isMobile } = useIsMobile();
  const location = useLocation();
  const [routeChanged, setRouteChanged] = useState<boolean>(false);

  useEffect(() => {
    setRouteChanged(true);
  }, [location]);

  useEffect(() => {
    if (!isMobile) {
      if (sidebarState === "expanded") {
        setPrevSidebarState("small");
        setSidebarState("expanded");
      } else {
        setPrevSidebarState("expanded");
        setSidebarState("small");
      }
    } else {
      setSidebarState("closed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <AnimatePresence>
      {sidebarState === "openWithOverlay" && (
        <>
          <AnimationWrapper
            id="mobile-sidebar"
            keyIndex="openWithOverlay-app-sidebar-content"
            animateOnAllScreens
            initial={{ x: placement === "right" ? "40vw" : "-40vw" }}
            animate={{
              x: "0",
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 150,
              },
            }}
            exit={{
              x: placement === "right" ? "25vw" : "-25vw",
              transition: {
                ease: "easeOut",
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

          <AnimationWrapper
            keyIndex="openWithOverlay-app-sidebar-overlay"
            id="overlay"
            animateOnAllScreens
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.5,
            }}
            transition={{ duration: 0.4, ease: "linear" }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarState(isMobile ? "closed" : "small")}
            className="fixed top-0 left-0 z-[1199] h-full w-full bg-gray-500"
          />
        </>
      )}
      {sidebarState === "expanded" && (
        <>
          <AnimationWrapper
            keyIndex="expanded-app-sidebar-content"
            animateOnAllScreens
            initial={{ x: routeChanged ? "-10vw" : "0vw" }}
            animate={{
              x: "0",
              transition: {
                type: "spring",
                damping: 50,
                stiffness: 310,
              },
            }}
            exit={{
              x: "-25vw",
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 150,
              },
            }}
            className={clsx(
              "fixed top-8 z-[1200] flex h-[94vh] w-72 flex-col bg-white shadow-lg rounded-xl ml-2"
            )}
          >
            {ExpandedSidebarContent}
          </AnimationWrapper>
          {/* <AnimationWrapper
            keyIndex="openWithOverlay-app-sidebar-overlay"
            id="overlay"
            animateOnAllScreens
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.5,
            }}
            transition={{ duration: 0.4, ease: "linear" }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarState(isMobile ? "closed" : "small")}
            className="fixed top-0 left-0 z-[1199] h-full w-full"
          /> */}
        </>
      )}
      {sidebarState === "small" && (
        <AnimationWrapper
          keyIndex="small-app-sidebar-content"
          animateOnAllScreens
          initial={{
            x: routeChanged ? "-5vw" : "0vw",
          }}
          animate={{
            x: "0",
            transition: {
              type: "spring",
              damping: 50,
              stiffness: 310,
            },
          }}
          exit={{
            x: "-15vw",
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 150,
            },
          }}
          className={clsx(
            "sticky top-8 z-[998] flex h-[94vh] ml-2 w-24 flex-col rounded-xl bg-white shadow-lg"
          )}
        >
          {SmallSidebarContent}
        </AnimationWrapper>
      )}
    </AnimatePresence>
  );
};
