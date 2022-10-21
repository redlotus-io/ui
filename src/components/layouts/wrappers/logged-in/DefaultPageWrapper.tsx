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
  return (
    <PartialPageWrapper
      MobileContent={
        <>
          <NavbarTop
            title="Template"
            user={{ id: "1", username: "Galaxy", email: "galaxy@gmail.com", avatar: null }}
          />
          <div className="px-4">{children}</div>
          <NavbarBottom>
            <NavbarBottomContent />
          </NavbarBottom>
        </>
      }
      Sidebar={
        <Sidebar
          ExpandedSidebarContent={<ExpandedSidebarContent />}
          SmallSidebarContent={<SmallSidebarContent />}
        />
      }
      RightSide={RightSide}
    >
      {children}
    </PartialPageWrapper>
  );
};
