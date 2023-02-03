import { useState } from "react";

import {
  DefaultPageWrapper,
  Modal,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RealButton,
} from "components";

export const PopupPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DefaultPageWrapper
      RightSide={
        <div>
          <RealButton>tere</RealButton>
        </div>
      }
    >
      <div className="space-y-6 ml-40">
        <div className="mb-[5rem]">
          <Popover>
            <PopoverTrigger>
              <RealButton className="w-80">hello</RealButton>
            </PopoverTrigger>
            <PopoverContent>
              jgoidfgjdfoigjdfoigjodfigjdofg ijdfoigjddasdasofijdasdasdasdasdsgdofi
              gjdofigjdfoigjdfoigjdofigjdfogijdfogi
            </PopoverContent>
          </Popover>
          <p className="z-20">tere</p>
        </div>
        <p className="mb-[30rem]">Lorem ipsum 123456789 tere mis component siin on</p>
        <p className="">hello here is the end of the page</p>
        <Modal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          maxWidth="xl"
          modalButton={<RealButton onClick={() => setIsModalOpen(true)}>Open modal</RealButton>}
        >
          <div>here is form content hello</div>
        </Modal>
        <div className="h-[300rem] w-28 bg-stone-200"></div>
      </div>
    </DefaultPageWrapper>
  );
};
