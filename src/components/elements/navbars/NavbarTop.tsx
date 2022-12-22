import { animations, AnimationWrapper } from "components";
import { useSidebar } from "context";
import { UserType } from "types";

interface Props {
  user: UserType;
  title: string;
}

export const NavbarTop = ({ user, title }: Props) => {
  const { setSidebarState, setPrevSidebarState } = useSidebar();
  return (
    <div className="mx-auto inset-x-0 my-2 fixed top-0 z-[1200] flex h-16 rounded-md drop-shadow-lg shadow-inner items-center w-[95%] bg-slate-50 py-12">
      <div className="flex flex-1 items-center justify-between px-4">
        <p className="text-2xl font-semibold text-gray-800">{title}</p>
        <AnimationWrapper variants={animations.smallScale} key="nt-user-icon">
          <div
            id="sidebar-button"
            role="button"
            tabIndex={0}
            className="flex cursor-pointer flex-row items-center"
            onClick={() => {
              setPrevSidebarState("closed");
              setSidebarState("mobile");
            }}
          >
            {user.avatar ? (
              <img className="h-5 w-5" alt="default pic" src={user.avatar} />
            ) : (
              <img className="h-14 w-14" alt="user" src={`/general/avatar.svg`} />
            )}
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};
