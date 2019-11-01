import React from "react";
import { mount, shallow, configure } from "enzyme";
import Typography from "@material-ui/core/Typography";
import getRelatedItems from "../src/lib//relatedItemsHelpers/relatedItemsApiCall.js";
import ItemList from "../src/components/RelatedItemsComponents/ItemList.jsx";
import AddToMyOutfitCardButton from "../src/components/RelatedItemsComponents/AddOutfitCardButton.jsx";
import store from "../src/store/store.js";
import { Provider } from "react-redux";
import MyOutfitsList from "../src/components/RelatedItemsComponents/MyOutfitsList.jsx";
import PopOut from "../src/components/RelatedItemsComponents/PopOut.jsx";

let sampletTest = (a, b) => {
  return a + b;
};

const samepleProductInfo = {
  id: 8,
  name: "YEasy 350",
  slogan: "Just jumped over jumpman",
  description:
    "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
  category: "Kicks",
  default_price: "450"
};

describe("AddToMyOutfitCardButton test", () => {
  test("Has Typography ADD TO MY OUTFITS", () => {
    expect(
      shallow(<AddToMyOutfitCardButton />).contains(
        <Typography variant="h4"> ADD TO MY OUTFITS</Typography>
      )
    ).toBe(true);
  });
});

describe("test that itemlist looks like the latest commmit", () => {
  test("Displays", () => {
    const wrapper = shallow(<ItemList productInfo={samepleProductInfo} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders out a div n", () => {
    expect(
      shallow(<ItemList productInfo={samepleProductInfo} />).contains(
        <Typography>RELATED ITEMS</Typography>
      )
    ).toBe(true);
  });
});

describe("test that MyOutfitsListlooks like the latest commmit", () => {
  test("Displays", () => {
    const wrapper = shallow(<MyOutfitsList productInfo={samepleProductInfo} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("test that PopOut like the latest commmit", () => {
  const currentProduct = {
    name: "test123",
    features: []
  };

  const relatedProduct = {
    name: "test123",
    features: []
  };
  test("Matches the snapshot", () => {
    const wrapper = shallow(
      <PopOut
        productInfo={samepleProductInfo}
        currentProduct={currentProduct}
        relatedProduct={relatedProduct}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Has Typography ADD TO MY OUTFITS", () => {
    expect(
      shallow(
        <PopOut
          productInfo={samepleProductInfo}
          currentProduct={currentProduct}
          relatedProduct={relatedProduct}
        />
      ).contains(<Typography>COMPARING</Typography>)
    ).toBe(true);
  });
});
