import React from "react";
import { shallow } from "enzyme";

import QuestionAnswer from "../src/components/questionComponents/QuestionAnswer.jsx";
import QASet from "../src/components/questionComponents/QASet.jsx";
import store from "../src/store/store.js";
import { Provider } from "react-redux";

let samplet2 = (a, b) => {
  return a + b;
};

test("adds 1+2 to equal to 3", () => {
  expect(samplet2(1, 5)).toBe(6);
});

describe("test that QA Component is connected to store", () => {
  test("Displays", () => {
    const propsMockup = {
      productInfo: {
        id: 1
      }
    };
    const wrapper = (
      <Provider store={store}>
        <QuestionAnswer props={propsMockup} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  // test("renders properly", () => {
  //   const wrapper = (
  //     <Provider store={store}>
  //       <QuestionAnswer props={propsMockup} />
  //     </Provider>
  //   );
  //   expect(wrapper.containsMatchingElement(<QASet />)).toBeTruthy();
  // });
  // test("renders two Questions on initial load", () => {
  //   const propsMockup = {
  //     id: 1,
  //     question_body: "test"
  //   };

  //   const wrapper = shallow(<QuestionAnswer productInfo={propsMockup} />);
  //   // const wrapper2 = shallow(<QASet question={propsMockup} />);

  //   // console.log("checking", wrapper.find(QASet).debug());
  //   // expect(wrapper.find(wrapper2)).toHaveLength(2);
  //   expect(wrapper.find(<QASet />)).toHaveLength(1);
  //   // expect(wrapper.contains(<QASet />)).toBe(true);
  // });
});
