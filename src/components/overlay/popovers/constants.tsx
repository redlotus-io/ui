export const popoverSizes = {
  sm: "w-32",
  md: "w-48",
  lg: "w-64",
};

export type PopoverProps = React.HTMLAttributes<HTMLDivElement> & {
  children: string | React.ReactNode;
  animKey: string;
  size?: keyof typeof popoverSizes;
  className?: string;
  isPopoverOpen: boolean;
  setIsPopoverOpen: (isPopoverOpen: boolean) => void;
  closeOnInnerClick?: boolean;
};
