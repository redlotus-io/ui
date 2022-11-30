export const popoverSizes = {
  sm: "w-32",
  md: "w-48",
  lg: "w-64",
};

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
  animKey?: string;
  action: React.ReactNode;
}
