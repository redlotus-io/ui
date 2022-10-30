import { DefaultPageWrapper, RealButton } from "components";

export const AboutPage = () => {
  return (
    <DefaultPageWrapper
      RightSide={
        <div>
          <RealButton>tere</RealButton>
        </div>
      }
    >
      <div>
        <p className="mb-[5rem]">
          <RealButton>About this app</RealButton>
        </p>
      </div>
    </DefaultPageWrapper>
  );
};
