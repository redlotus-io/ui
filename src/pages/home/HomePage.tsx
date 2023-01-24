import { Formik } from "formik";
import { HiAnnotation, HiCamera, HiEye } from "react-icons/hi";

import { Button, DefaultPageWrapper, FormikInput, RealButton } from "components";

export const HomePage = () => {
  return (
    <DefaultPageWrapper
      RightSide={
        <div>
          <RealButton>tere</RealButton>
        </div>
      }
    >
      <div className="space-y-6 ml-20 bg-white p-20">
        <Formik initialValues={{}} onSubmit={() => {}}>
          <>
            <FormikInput
              name="tere"
              value="tere mina olen tomi markus"
              inputPrefix={<HiAnnotation />}
            />
            <FormikInput name="tere2" value="tere mina olen tomi markus" />
            <FormikInput name="tere12" placeholder="email" />
            <FormikInput
              name="tere3"
              value="tere mina olen tomi markus"
              inputAfterfix={<HiEye />}
            />
            <FormikInput
              name="tere4"
              value="tere mina olen tomi markus"
              inputPrefix={<HiAnnotation />}
              inputAfterfix={<HiEye />}
            />
          </>
        </Formik>
        <div className="max-w-fit"></div>
        <Button>registreeri</Button>
        <Button variant="red" className="w-[20rem] !py-4">
          registreeri
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-2 max-w-[340px] m-auto xs2:flex xs2:justify-start xs:max-w-none xs:m-0 xs:ml-4 mb-40">
        <RealButton size="oneLetter">A</RealButton>
        <RealButton size="oneLetter">B</RealButton>
        <RealButton size="oneLetter">C</RealButton>
        <RealButton size="oneLetter">D</RealButton>
        <RealButton size="oneLetter">E</RealButton>
        <RealButton size="oneLetter">F</RealButton>
        <RealButton size="oneLetter">G</RealButton>
        <RealButton size="oneLetter">H</RealButton>
        <RealButton size="icon">
          <HiCamera className="w-7 h-7" />
        </RealButton>
      </div>
      <RealButton size="md">
        <HiCamera className="w-7 h-7" />
      </RealButton>
    </DefaultPageWrapper>
  );
};
