import { HTMLMotionProps, motion } from "framer-motion";

import { useIsMobile } from "hooks";

interface Props {
  children?: React.ReactNode;
  /**
   * @description Set false if you don't want to use animation on mobile
   * @default true
   */
  animateOnMobile?: boolean;
  keyIndex: string;
}

type IProps = Props & HTMLMotionProps<"div">;

export const AnimationWrapper = ({
  children,
  animateOnMobile = true,
  variants,
  keyIndex,
  ...props
}: IProps) => {
  const { isMobile } = useIsMobile();

  if (!animateOnMobile && isMobile) {
    <motion.div variants={{}} {...props}>
      {children}
    </motion.div>;
  }

  return (
    <motion.div
      key={keyIndex}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="whileHover"
      whileTap="whileTap"
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};
