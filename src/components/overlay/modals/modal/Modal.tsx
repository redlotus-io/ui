import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useRef } from "react";

import { animations, AnimationWrapper } from "components";

const modalMaxWidth = {
  xs: "sm:w-[20rem]",
  sm: "sm:w-[24rem]",
  md: "sm:w-[28rem]",
  lg: "sm:w-[32rem]",
  xl: "sm:w-[36rem]",
};

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalButton: ReactNode;
  children?: ReactNode;
  maxWidth?: keyof typeof modalMaxWidth;
}

export const Modal = ({ children, modalButton, open, setOpen, maxWidth = "xl" }: Props) => {
  const initialFocusRef = useRef(null);
  return (
    <>
      {modalButton}
      <AnimatePresence>
        {open && (
          <Dialog
            static
            as={motion.div}
            key="modal-dialog"
            initialFocus={initialFocusRef}
            className="fixed inset-0 z-[1300] flex select-none items-center justify-center"
            open={open}
            onClose={setOpen}
          >
            <AnimationWrapper
              key="app-modal-overlay"
              id="overlay"
              variants={animations.overlay}
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full bg-gray-500 opacity-40"
            />
            <button
              id="button-to-remove-autofocus"
              ref={initialFocusRef}
              className="absolute inset-0 hidden"
            />
            <AnimationWrapper
              key="app-modal-children"
              id="modal-children"
              variants={animations.modalEffect}
              className={clsx(
                "minscreen:min-w-[20rem] rounded-xl bg-white",
                modalMaxWidth[maxWidth]
              )}
            >
              {children}
            </AnimationWrapper>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
