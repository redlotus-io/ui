import { useState } from "react";

import { DefaultPageWrapper, Modal, Popover, RealButton } from "components";

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
      <div className="space-y-6">
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
