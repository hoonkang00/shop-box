import React from "react";
import { mount, shallow, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import "babel-polyfill";
// configure({ adapter: new Adapter() });

import QuestionAnswer from "../src/components/questionComponents/QuestionAnswer.jsx";
import QASet from "../src/components/questionComponents/QASet.jsx";
import App from "../src/components/App.jsx";

// let samplet2 = (a, b) => {
//   return a + b;
// };

// test("adds 1+2 to equal to 3", () => {
//   expect(samplet2(1, 5)).toBe(6);
// });

// describe("Questions", () => {
//   it("should render max 2 questions on load", () => {
//     const wrapper = shallow(<App productInfo={{ id: 1 }} />);
//     expect(wrapper)
//       .exists()
//       .to.equal(true);
//   });

//   // it("render correctly text component", () => {
//   //   const QAComponent = renderer.create(<QuestionAnswer />).toJSON();
//   //   expect(QAComponent).toMatchSnapshot();
//   // });
// });

test("Questions test", () => {
  expect(
    shallow(<QuestionAnswer productId={{ id: 1 }} />).contains(
      <div className="q-and-a">
        QUESTIONS & ANSWERS
        <SearchQuestions
          questions={questions}
          updateSearchQs={updateSearchQs}
          setQuestions={setQuestions}
          getQuestions={getQuestions}
          productId={props.productInfo.id}
        />
      </div>
    )
  ).toBe(true);
});
