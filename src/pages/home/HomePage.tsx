import { DefaultPageWrapper } from "components";

export const HomePage = () => {
  return (
    <DefaultPageWrapper RightSide={<div>tere</div>}>
      <div className="h-52 w-52 bg-slate-50">
        <p>Hello</p>
      </div>
    </DefaultPageWrapper>
  );
};
