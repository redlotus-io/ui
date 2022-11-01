import clsx from "clsx";
import { HiAnnotation, HiArchive, HiHome } from "react-icons/all";

import { HomePage, AboutPage, SettingsPage } from "pages";
import { Router } from "types";

const smallIconCss = "h-8 w-8 fill-inherit";
const bigIconCss = "mr-3 h-8 w-8 fill-inherit";

export const routes: Router[] = [
  {
    to: "/",
    routeName: "Home",
    element: <HomePage />,
    smallIcon: <HiHome className={clsx(smallIconCss)} />,
    bigIcon: <HiHome className={clsx(bigIconCss)} />,
  },
  {
    to: "/about",
    routeName: "About",
    element: <AboutPage />,
    smallIcon: <HiArchive className={clsx(smallIconCss)} />,
    bigIcon: <HiArchive className={clsx(bigIconCss)} />,
  },
  {
    to: "/settings",
    routeName: "Settings",
    element: <SettingsPage />,
    smallIcon: <HiAnnotation className={clsx(smallIconCss)} />,
    bigIcon: <HiAnnotation className={clsx(bigIconCss)} />,
    tooltip: "settings",
  },
];
