import { Formik } from "formik";
import { HiAnnotation, HiEye } from "react-icons/hi";

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
    </DefaultPageWrapper>
  );
};
