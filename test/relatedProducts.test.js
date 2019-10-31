import React from "react";
import { mount, shallow, configure } from "enzyme";
import Typography from "@material-ui/core/Typography";
import getRelatedItems from "../src/lib//relatedItemsHelpers/relatedItemsApiCall.js";
import ItemList from "../src/components/RelatedItemsComponents/ItemList.jsx";
import AddToMyOutfitCardButton from "../src/components/RelatedItemsComponents/AddOutfitCardButton.jsx";
import { it } from "date-fns/locale";

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

const Test = () => {
  return (
    <div className="testtest">
      <p>hello</p>
    </div>
  );
};

// test("checks if the api call that gets all the info on all related items to given product id works", () => {
//   let data = getRelatedItems(1);
//   expect(data).toBe("123");
// });

describe("AddToMyOutfitCardButton test", () => {
  test("Has Typography ADD TO MY OUTFITS", () => {
    expect(
      shallow(<AddToMyOutfitCardButton />).contains(
        <Typography variant="h4"> ADD TO MY OUTFITS</Typography>
      )
    ).toBe(true);
  });
});

describe("ItemList test", () => {
  test("renders out a div n", () => {
    expect(
      shallow(<ItemList productInfo={samepleProductInfo} />).contains(
        <Typography>RELATED ITEMS</Typography>
      )
    ).toBe(true);
  });
});
