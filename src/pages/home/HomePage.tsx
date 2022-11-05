import { useState } from "react";

import { DefaultPageWrapper, Popover, RealButton } from "components";

export const HomePage = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

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
        <p className="mb-[5rem]">Lorem ipsum 123456789 tere mis component siin on</p>
        <p className="mb-[5rem]">Lorem ipsum 123456789 tere mis component siin on</p>
        <p className="mb-[5rem]">Lorem ipsum 123456789 tere mis component siin on</p>
        <div className="mb-[5rem]">
          <RealButton id="popoverCreator" onClick={() => setIsPopoverOpen(value => !value)}>
            hmm
          </RealButton>
          <Popover
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
            animKey="popover1"
          >
            popover here
          </Popover>
        </div>
        <p className="">hello here is the end of the page</p>
      </div>
    </DefaultPageWrapper>
  );
};
