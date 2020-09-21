import React from "react";
import Main from ".";
import { shallow } from "enzyme";

describe("Main", () => {
  it("Render", () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.length).toBe(1);
  });
});
