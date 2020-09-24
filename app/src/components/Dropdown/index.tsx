import React, { ReactNode } from "react";
import "./style.scss";

interface Props {
  children: ReactNode[];
  opened: boolean;
  close: () => void;
}

export default class Dropdown extends React.Component<Props> {
  componentDidMount() {
    document.addEventListener("mouseup", this.handleClickOutside, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleClickOutside, false);
  }
  handleClickOutside = () => {
    this.props.close();
  };
  render() {
    const { children, opened } = this.props;
    return (
      <ul className={opened ? "dropdown-opened" : "dropdown-closed"}>
        {children}
      </ul>
    );
  }
}
