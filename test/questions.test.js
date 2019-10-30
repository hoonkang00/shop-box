// import React from "react";
// import { shallow, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import "babel-polyfill";
// configure({ adapter: new Adapter() });

import QuestionAnswer from "../src/components/questionComponents/QuestionAnswer.jsx";
import QASet from "../src/components/questionComponents/QASet.jsx";

let samplet2 = (a, b) => {
  return a + b;
};

test("adds 1+2 to equal to 3", () => {
  expect(samplet2(1, 5)).toBe(6);
});

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("http://localhost:3000/products/635/");
//   await page.screenshot({ path: "example.png" });

//   await browser.close();
// })();

describe("Questions", () => {
  // it("should render my component", () => {
  //   const wrapper = shallow(<QuestionAnswer />);
  // });
  it("should render max 2 questions on load", () => {
    const wrapper = shallow(<QuestionAnswer />);
    expect(wrapper.find(QASet)).to.be.at.most(2);
  });
});

// ,
//   "jest": {
//     "snapshotSerializers": [
//       "enzyme-to-json/serializer"
//     ],
//     "setupFiles": [
//       "./test/questions.test.js"
//     ]
//   }
