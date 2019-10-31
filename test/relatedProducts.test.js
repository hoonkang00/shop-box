import React from "react";
import { mount, shallow, configure } from "enzyme";
import Typography from "@material-ui/core/Typography";

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

describe("AddToMyOutfitCardButton test", () => {
  it("Has Typography ADD TO MY OUTFITS", () => {
    expect(
      shallow(<AddToMyOutfitCardButton />).contains(
        <Typography variant="h4"> ADD TO MY OUTFITS</Typography>
      )
    ).toBe(true);
  });
});
