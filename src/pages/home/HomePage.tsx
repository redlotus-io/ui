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
        <p>Hello</p>
      </div>
    </DefaultPageWrapper>
  );
};
