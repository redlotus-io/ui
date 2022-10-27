import { HiChartBar, HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

import {
  ExpandedSidebarContent,
  SmallSidebarContent,
  NavbarBottom,
  NavbarTop,
  PartialPageWrapper,
  Sidebar,
  AnimationWrapper,
  animations,
} from "components";
import { routes } from "routes";

interface Props {
  children: React.ReactNode;
  RightSide?: React.ReactNode;
}

const NavbarBottomContent = () => {
  return (
    <>
      <Link to="/">
        <AnimationWrapper
          variants={animations.smallScale}
          animateOnAllScreens
          keyIndex="nb-home-icon"
        >
          <HiHome className="h-14 w-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </AnimationWrapper>
      </Link>
      <Link to="/stats">
        <AnimationWrapper
          variants={animations.smallScale}
          animateOnAllScreens
          keyIndex="nb-chart-icon"
        >
          <HiChartBar className="h-14 w-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </AnimationWrapper>
      </Link>
    </>
  );
};

export const DefaultPageWrapper = ({ children, RightSide }: Props) => {
  const appLogo = "/icons/android-chrome-512x512.png";
  const avatar = "/general/avatar.svg";
  const username = "Galaxy";

  return (
    <PartialPageWrapper
      MobileContent={
        <>
          <NavbarTop
            title="Template"
            user={{ id: "1", username, email: "galaxy@gmail.com", avatar: null }}
          />
          <div className="px-4">{children}</div>
          <NavbarBottom>
            <NavbarBottomContent />
          </NavbarBottom>
        </>
      }
      Sidebar={
        <Sidebar
          ExpandedSidebarContent={
            <ExpandedSidebarContent
              routes={routes}
              appLogo={appLogo}
              BottomContent={
                <div className="flex flex-row items-center space-x-3 px-4">
                  <img className="h-14 w-14" alt="user" src={avatar} />
                  <p className="text-xl font-semibold">{username}</p>
                </div>
              }
            />
          }
          SmallSidebarContent={
            <SmallSidebarContent
              routes={routes}
              appLogo={appLogo}
              BottomContent={<img className="h-14 w-14" alt="avatar" src={avatar} />}
            />
          }
        />
      }
      RightSide={RightSide}
    >
      {children}
    </PartialPageWrapper>
  );
};
