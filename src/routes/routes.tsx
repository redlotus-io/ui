import clsx from "clsx";
import { HiAnnotation, HiArchive, HiCollection, HiFilm, HiHome } from "react-icons/hi";

import { HomePage, AboutPage, SettingsPage, FramerPage, PopupPage } from "pages";
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
  {
    to: "/framer",
    routeName: "Framer",
    element: <FramerPage />,
    smallIcon: <HiFilm className={clsx(smallIconCss)} />,
    bigIcon: <HiFilm className={clsx(bigIconCss)} />,
    tooltip: "framer",
  },
  {
    to: "/popups",
    routeName: "PopUps",
    element: <PopupPage />,
    smallIcon: <HiCollection className={clsx(smallIconCss)} />,
    bigIcon: <HiCollection className={clsx(bigIconCss)} />,
    tooltip: "modals",
  },
];
