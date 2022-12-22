export const realButtonVariants = {
  // regular --> hover --> active --> dark
  green: `bg-lime-500 text-[#f3f2f0] border-lime-600
    hover:text-white
    active:border-lime-500
    dark:bg-lime-700 dark:border-lime-800 dark:active:border-lime-700`,
  dark: `bg-gray-700 text-[#f3f2f0] border-gray-900
    hover:text-white
    active:border-gray-700
    dark:bg-gray-700 dark:border-gray-900 dark:active:border-gray-700`,
  light: `bg-slate-50 text-slate-700 border-slate-200
    hover:text-gray-800
    active:border-slate-50`,
  blue: `bg-blue-700 text-[#f3f2f0] border-blue-900
    hover:text-white
    active:border-blue-700
    dark:bg-blue-700 dark:border-blue-900 dark:active:border-blue-700`,
  casualRed: `text-textGray bg-[#FF6961] border-[#B82E26]
    hover:text-textGray
    active:border-[#FF6961]`,
  casualOrange: `text-textGray bg-[#FFB480] border-[#C66929]
    hover:text-textGray
    active:border-[#FFB480]`,
  casualYellow: `text-textGray bg-[#F8F38D] border-[#CCC421]
    hover:text-textGray
    active:border-[#F8F38D]`,
  casualGreen: `text-textGray bg-[#42D6A4] border-[#20AB7C]
    hover:text-textGray
    active:border-[#42D6A4]`,
  casualAqua: `text-textGray bg-[#08CAD1] border-[#0F8C90]
    hover:text-textGray
    active:border-[#08CAD1]`,
  casualBlue: `text-textGray bg-[#59ADF6] border-[#2984D3]
    hover:text-textGray
    active:border-[#59ADF6]`,
  casualViolet: `text-textGray bg-[#9D94FF] border-[#6156E1]
    hover:text-textGray
    active:border-[#9D94FF]`,
  casualPurple: `text-textGray bg-[#C780E8] border-[#B15BD9]
    hover:text-textGray
    active:border-[#C780E8]`,
};

export const realButtonSizes = {
  sm: "py-2 px-10 text-sm rounded-2xl",
  md: "py-2 px-14 text-md rounded-2xl",
  lg: "py-3 px-18 text-lg rounded-2xl",
  oneLetter: "py-3 px-5 text-md rounded-lg uppercase",
};

export type RealButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof realButtonVariants;
  size?: keyof typeof realButtonSizes;
  children: string | React.ReactNode;
};
