import { DefaultPageWrapper, Popover, RealButton } from "components";

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
        <p className="mb-[5rem]">First things first</p>

        <p className="mb-[5rem]">Lorem ipsum 123456789 tere mis component siin on</p>
        <div className="mb-[5rem]">
          <Popover animKey="hello1" action={<RealButton>hello</RealButton>}>
            something
          </Popover>
          <p>tere</p>
          <Popover animKey="hello3" action={<RealButton>hellod</RealButton>}>
            something2
          </Popover>
        </div>
        <p className="mb-[30rem]">Lorem ipsum 123456789 tere mis component siin on</p>
        <p className="">hello here is the end of the page</p>
      </div>
    </DefaultPageWrapper>
  );
};
