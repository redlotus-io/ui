import clsx from "clsx";

export const realButtonVariants = {
  // regular --> hover --> active --> dark --> focus
  dark: `bg-gray-700 text-textWhite border-gray-900
    hover:text-white
    active:border-gray-700
    dark:bg-gray-700 dark:border-gray-900 dark:active:border-gray-700
    outline-darkOutline`,
  light: `bg-slate-50 text-slate-700 border-slate-200
    hover:text-gray-800
    active:border-slate-50
    outline-lightOutline`,
  blue: `bg-blue-700 text-textWhite border-blue-900
    hover:text-white
    active:border-blue-700
    dark:bg-blue-700 dark:border-blue-900 dark:active:border-blue-700
    focus:ring-blue-500
    outline-blueOutline`,
  casualRed: `text-textGray bg-casualRed border-casualRedDarker
    hover:text-textGray
    active:border-casualRed
    outline-casualRedOutline`,
  casualOrange: `text-textGray bg-casualOrange border-casualOrangeDarker
    hover:text-textGray
    active:border-casualOrange
    outline-casualOrangeOutline`,
  casualGreen: `text-textGray bg-casualGreen border-casualGreenDarker
    hover:text-textGray
    active:border-casualGreen
    outline-casualGreenOutline`,
  casualAqua: `text-textGray bg-casualAqua border-casualAquaDarker
    hover:text-textGray
    active:border-casualAqua
    outline-casualAquaOutline`,
  casualSkyBlue: `text-textGray bg-casualSkyBlue border-casualSkyBlueDarker
    hover:text-textGray
    active:border-casualSkyBlue
    outline-casualSkyBlueOutline`,
  casualSlateBlue: `text-textGray bg-casualSlateBlue border-casualSlateBlueDarker
    hover:text-textGray
    active:border-casualSlateBlue
    outline-casualSlateBlueOutline`,
  casualViolet: `text-textGray bg-casualViolet border-casualVioletDarker
    hover:text-textGray
    active:border-casualViolet
    outline-casualVioletOutline`,
  casualPink: `text-textGray bg-casualPink border-casualPinkDarker
    hover:text-textGray
    active:border-casualPink
    outline-casualPinkOutline`,
};

export const realButtonSizes = {
  sm: "py-2 px-10 text-sm rounded-2xl max-h-[4rem]",
  md: "py-2 px-14 text-md rounded-2xl max-h-[4rem]",
  lg: "py-3 px-18 text-lg rounded-2xl max-h-[4rem]",
  oneLetter: "py-3 px-5 text-md rounded-lg uppercase max-h-[3.2rem] max-w-[3.2rem]",
};

export type RealButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof realButtonVariants;
  size?: keyof typeof realButtonSizes;
  children: string | React.ReactNode;
};

export const RealButton = ({
  type = "button",
  className = "",
  variant = "dark",
  size = "md",
  children,
  ...props
}: RealButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "m-0 border-b-[6px] text-center font-medium tracking-wider",
        "transition-all duration-300 hover:-translate-y-[0.15rem]",
        "active:translate-y-[0.2rem] active:duration-75",
        "focus:outline-[3.5px] focus:outline focus:-translate-y-[0.2rem]",
        realButtonVariants[variant],
        realButtonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
