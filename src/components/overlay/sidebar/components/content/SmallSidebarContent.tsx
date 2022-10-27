import clsx from "clsx";
import { HiMenu, HiHome, HiArchive, HiAcademicCap } from "react-icons/all";

import { AnimationWrapper, animations, SidebarIconLink } from "components";
import { useSidebar } from "context";

export const SmallSidebarContent = () => {
  const { setSidebarState } = useSidebar();
  return (
    <div className="flex h-full flex-col justify-between py-6 px-3">
      <div className={clsx("flex flex-col items-center justify-center")}>
        <div className="min-h-[3.5rem] min-w-[3.5rem]">
          <img className="h-14 w-14" src={`/icons/android-chrome-512x512.png`} alt="icon" />
        </div>
        <div className="mt-6 mb-4">
          <button
            className="rounded-md p-3 hover:bg-slate-100 lg:hidden"
            onClick={() => setSidebarState("openWithOverlay")}
          >
            <AnimationWrapper keyIndex="sidebar-x-icon" variants={animations.smallScale}>
              <HiMenu className="h-7 w-7 fill-slate-700 hover:fill-slate-800" />
            </AnimationWrapper>
          </button>
          <button
            className="rounded-md p-3 hover:bg-slate-100 md:hidden lg:block"
            onClick={() => setSidebarState("expanded")}
          >
            <AnimationWrapper keyIndex="sidebar-x-icon" variants={animations.smallScale}>
              <HiMenu className="h-7 w-7 fill-slate-700 hover:fill-slate-800" />
            </AnimationWrapper>
          </button>
        </div>
        <div className="z-[998] h-full space-y-4">
          <SidebarIconLink
            to="/"
            tooltip="home"
            icon={<HiHome className="h-8 w-8 fill-inherit" />}
          />
          <SidebarIconLink
            to="/1"
            tooltip="test1"
            icon={<HiArchive className="h-8 w-8 fill-inherit" />}
          />
          <SidebarIconLink
            to="/2"
            tooltip="test2"
            icon={<HiAcademicCap className="h-8 w-8 fill-inherit" />}
          />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img className="h-14 w-14" alt="user" src={`/general/avatar.svg`} />
      </div>
    </div>
  );
};
