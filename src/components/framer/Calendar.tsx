import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  parse,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { AnimatePresence, motion, MotionConfig, Variants } from "framer-motion";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import useMeasure from "react-use-measure";

// const transition = { type: "tween", ease: "easeOut", duration: 0.25 };
const transition = { type: "spring", bounce: 0, duration: 0.3 };
const variants = {
  enter: (direction: number) => {
    return { x: `${100 * direction}%`, opacity: 0 };
  },
  middle: { x: "0%", opacity: 1 },
  exit: (direction: number) => {
    return { x: `${-100 * direction}%`, opacity: 0 };
  },
};

const removeImmediately: Variants = {
  exit: { visibility: "hidden" },
};

interface ResizablePanelProps {
  children: React.ReactNode;
}

const ResizablePanel = ({ children }: ResizablePanelProps) => {
  const [ref, bounds] = useMeasure();

  return (
    <motion.div animate={{ height: bounds.height > 0 ? bounds.height : 0 }}>
      <div ref={ref}>{children}</div>
    </motion.div>
  );
};

export const Calendar = () => {
  const [monthString, setMonthString] = useState(format(new Date(), "yyyy-MM"));
  const [direction, setDirection] = useState<number>();
  const [isAnimating, setIsAnimating] = useState(false);
  const month = parse(monthString, "yyyy-MM", new Date());

  function nextMonth() {
    if (isAnimating) return;

    const next = addMonths(month, 1);

    setMonthString(format(next, "yyyy-MM"));
    setDirection(1);
    setIsAnimating(true);
  }

  function previousMonth() {
    if (isAnimating) return;

    const previous = subMonths(month, 1);

    setMonthString(format(previous, "yyyy-MM"));
    setDirection(-1);
    setIsAnimating(true);
  }

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month)),
    end: endOfWeek(endOfMonth(month)),
  });

  return (
    <MotionConfig transition={transition}>
      <div className="flex min-h-screen items-start bg-stone-800 pt-16 text-stone-900">
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white">
          <div className="py-8">
            <div className="flex flex-col justify-center rounded text-center">
              <ResizablePanel>
                <AnimatePresence
                  mode="popLayout"
                  initial={false}
                  custom={direction}
                  onExitComplete={() => setIsAnimating(false)}
                >
                  <motion.div key={monthString} initial="enter" animate="middle" exit="exit">
                    <header className="relative flex justify-between px-8">
                      <motion.button
                        variants={removeImmediately}
                        className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                        onClick={previousMonth}
                      >
                        <HiChevronLeft className="h-4 w-4" />
                      </motion.button>
                      <motion.p
                        variants={variants}
                        custom={direction}
                        className="absolute inset-0 flex items-center justify-center font-semibold"
                      >
                        {format(month, "MMMM yyyy")}
                      </motion.p>
                      <motion.button
                        variants={removeImmediately}
                        className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                        onClick={nextMonth}
                      >
                        <HiChevronRight className="h-4 w-4" />
                      </motion.button>
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, white 15%, transparent 30%, transparent 70%, white 85%)",
                        }}
                        variants={removeImmediately}
                      />
                    </header>

                    <motion.div
                      variants={removeImmediately}
                      className="mt-6 grid grid-cols-7 gap-y-6 px-8 text-sm"
                    >
                      <span className="font-medium text-stone-500">Su</span>
                      <span className="font-medium text-stone-500">Mo</span>
                      <span className="font-medium text-stone-500">Tu</span>
                      <span className="font-medium text-stone-500">We</span>
                      <span className="font-medium text-stone-500">Th</span>
                      <span className="font-medium text-stone-500">Fr</span>
                      <span className="font-medium text-stone-500">Sa</span>
                    </motion.div>

                    <motion.div
                      variants={variants}
                      custom={direction}
                      className="mt-6 grid grid-cols-7 gap-y-6 px-8 text-sm"
                    >
                      {days.map(day => (
                        <span
                          className={`${
                            isSameMonth(day, month) ? "" : "text-stone-300"
                          } font-semibold`}
                          key={format(day, "yyyy-MM-dd")}
                        >
                          {format(day, "d")}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </ResizablePanel>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};
