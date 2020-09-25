import { useMediaQuery } from "react-responsive";

export default () => {
  const isBigScreen = useMediaQuery({ minWidth: 900 });
  const isMediumScreen = useMediaQuery({ maxWidth: 900 });
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });

  return {
    isBigScreen,
    isMediumScreen: isMediumScreen && !isSmallScreen,
    isSmallScreen: isSmallScreen && isMediumScreen,
  };
};
