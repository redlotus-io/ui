/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import "@redlotus/ui/dist/style.css";
import "../index.css";

import { RedlotusWrapper } from "./RedlotusWrapper";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="et">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RedlotusWrapper>{children}</RedlotusWrapper>
      </body>
    </html>
  );
}
