import React from "react";
import { mount, shallow, configure } from "enzyme";

import ProductDetails from "../src/components/ProductDetails/ProductDetails.jsx";

test("adds 1+2 to equal to 3", () => {
  expect(((a, b) => a + b)(1, 2)).toBe(3);
});
