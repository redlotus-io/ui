import { DefaultPageWrapper, RealButton } from "components";

export const SettingsPage = () => {
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
          <RealButton>hmm</RealButton>
        </p>
      </div>
    </DefaultPageWrapper>
  );
};
