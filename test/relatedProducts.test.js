import React from "react";
import { mount, shallow } from "enzyme";

import AddToMyOutfitCardButton from "../src/components/RelatedItemsComponents/AddOutfitCardButton.jsx";

let sampletTest = (a, b) => {
  return a + b;
};

const Test = () => {
  return (
    <div className="testtest">
      <p>hello</p>
    </div>
  );
};

//adddd commentss
let testingtesting = "hello";

test("adds 1+2 to equal to 3", () => {
  expect(sampletTest(1, 2)).toBe(3);
});

test("AddToMyOutfitCardButton test", () => {
  expect(
    shallow(<Test />).contains(
      <div className="testtest">
        <p>hello</p>
      </div>
    )
  ).toBe(true);
});
