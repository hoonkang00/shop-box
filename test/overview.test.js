import React from "react";
import { mount, shallow, configure } from "enzyme";

import ProductDetails from "../src/components/ProductDetails/ProductDetails.jsx";
import StyleBubble from "../src/components/ProductDetails/StyleBubble.jsx";

import store from "../src/store/store.js";
import { Provider } from "react-redux";

describe("test that style bubble is connected to store", () => {
  test("Displays", () => {
    const styleMockup = {
      photos: [
        {
          thumbnail_url: ""
        }
      ]
    };
    const wrapper = (
      <Provider store={store}>
        <StyleBubble style={styleMockup} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
