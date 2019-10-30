import React from "react";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import "babel-polyfill";
configure({ adapter: new Adapter() });

import QuestionAnswer from "../src/components/questionComponents/QuestionAnswer.jsx";
import QASet from "../src/components/questionComponents/QASet.jsx";

let samplet2 = (a, b) => {
  return a + b;
};

test("adds 1+2 to equal to 3", () => {
  expect(samplet2(1, 5)).toBe(6);
});

// describe("Questions", () => {
//   it("should render max 2 questions on load", () => {
//     const wrapper = shallow(<QuestionAnswer />);
//     expect(wrapper.find(QASet)).to.be.at.most(2);
//   });
// });
