interface Props {
  children: React.ReactNode;
}

export const NavbarBottom = ({ children }: Props) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 my-2 mx-auto h-fit w-[95%] rounded-md bg-slate-50 py-2 shadow-2xl">
      <div className="flex w-full flex-row justify-around">{children}</div>
    </div>
  );
};
