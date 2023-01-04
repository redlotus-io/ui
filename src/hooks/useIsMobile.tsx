import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";

const sizes = {
  minscreen: 340,
  xs: 460,
  xs2: 500,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useIsMobile = (size: keyof typeof sizes = "md") => {
  const width = useWindowWidth();

  const [isMobile, setIsMobile] = useState<boolean>(width >= sizes[size] ? false : true);

  useEffect(() => {
    const checkIfUserIsOnMobile = () => {
      if (width >= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    checkIfUserIsOnMobile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return { isMobile, size };
};
