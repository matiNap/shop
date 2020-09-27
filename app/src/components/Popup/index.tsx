import React, { ReactNode } from "react";
import { useSpring, animated } from "react-spring";
import "./style.scss";

interface Props {
  children: ReactNode | ReactNode[];
}

export default ({ children }: Props) => {
  const animProps = useSpring({
    config: { duration: 150 },
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div className="popup-window" style={animProps}>
      <div className="popup-box">{children}</div>
    </animated.div>
  );
};
