import { DefaultPageWrapper, RealButton } from "components";

export const HomePage = () => {
  return (
    <DefaultPageWrapper
      RightSide={
        <div>
          <RealButton>tere</RealButton>
        </div>
      }
    >
      <div>
        <p>Lorem ipsum 123456789 tere mis component siin on</p>
      </div>
    </DefaultPageWrapper>
  );
};
