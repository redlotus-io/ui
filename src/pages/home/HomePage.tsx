import { useState } from "react";

import {
  Accordion,
  DefaultPageWrapper,
  Modal,
  Popover,
  RealButton,
  realButtonVariants,
} from "components";

const loremIpsumParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque euismod, nisl eget aliquam tincidunt, nunc eros aliquam massa, nec
aliquam nisl nunc nec ante. Donec auctor, nisl eget aliquam tincidunt, nunc eros
aliquam massa, nec aliquam nisl nunc nec ante. Donec auctor, nisl eget aliquam
tincidunt, nunc eros aliquam massa, nec aliquam nisl nunc nec ante. Donec auctor,
nisl eget aliquam tincidunt, nunc eros aliquam massa, nec aliquam nisl nunc nec
ante. Donec auctor, nisl eget aliquam tincidunt, nunc eros aliquam massa, nec
aliquam nisl nunc nec ante. Donec auctor, nisl eget aliquam tincidunt, nunc eros`;

export const HomePage = () => {
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
        <p className="mb-[5rem]">First things first</p>
        <div className="flex flex-col space-y-2">
          {Object.keys(realButtonVariants).map(variant => (
            <RealButton variant={variant as keyof typeof realButtonVariants} size="oneLetter">
              A
            </RealButton>
          ))}
        </div>
        <RealButton variant={"green"} size="oneLetter">
          a
        </RealButton>
        <Accordion
          key={"dasdasd"}
          title={"dasdasd"}
          body={loremIpsumParagraph}
          iconClassName="h-8 w-8 text-[#E50815]"
        />
        <Accordion
          key={"hey"}
          title={"Uute liikmete vastuvõtt"}
          body={
            <>
              <div className="text-lg px-4 py-2 mb-2 text-gray-700">
                Uute liikmete vastuvõtt on taas avatud septembris 2023.
              </div>

              <div className="px-4 py-2 text-xl mb-2 text-gray-700">
                Treeningud <b>algklasside lastele</b>, VHK spordisaalis (Vene 22):
              </div>
              <ul className="list-disc pl-8 mb-4">
                <li className="font-bold text-lg mb-2 text-gray-800">V-grupp:</li>
                <ul className="list-disc pl-8">
                  <li className="text-base text-gray-700">TEISIPÄEVAL kell 15:00 – 16:00</li>
                  <li className="text-base text-gray-700">KOLMAPÄEVAL kell 15:00 – 16:00</li>
                  <li className="text-base text-gray-700">REEDEL kell 15:00 – 16:00</li>
                </ul>
              </ul>

              <div className="px-4 py-2 text-xl mb-2 text-gray-700">
                Treeningud <b>noortele ja täiskasvanutele</b>, VHK spordisaalis (Vene 22):
              </div>
              <ul className="list-disc pl-8 mb-4">
                <li className="font-bold text-lg mb-2 text-gray-800">A-grupp:</li>
                <ul className="list-disc pl-8">
                  <li className="text-base text-gray-700">TEISIPÄEVAL kell 16:30-17:45</li>
                  <li className="text-base text-gray-700">NELJAPÄEVAL kell 16:30-17:45</li>
                  <li className="text-base text-gray-700">
                    LAUPÄEVAL kell 11:15-12:45 (vastavalt treeninggraafikule)
                  </li>
                </ul>
              </ul>
            </>
          }
          iconClassName="h-8 w-8 text-[#E50815] "
        />

        <div className="mb-[20rem]"></div>
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
      </div>
    </DefaultPageWrapper>
  );
};
