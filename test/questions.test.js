import React from "react";
import QuestionAnswer from "../src/components/questionComponents/QuestionAnswer.jsx";
import QASet from "../src/components/questionComponents/QASet.jsx";
import store from "../src/store/store.js";
import { Provider } from "react-redux";
import puppeteer from "puppeteer";

const APP = "http://localhost:3000";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80
  });
  page = await browser.newPage();
  await page.setViewport({ isMobile: false, width, height });
});
afterAll(() => {
  browser.close();
});

describe("Testing the frontend", () => {
  test("assert that <title> is correct", async () => {
    await page.goto(APP);
    const title = await page.title();
    expect(title).toBe("ShopBox App");
  });

  test("add answer button opens modal window", async () => {
    await page.goto(APP);
    await page.waitForSelector(".add-answer");
    await page.click(".add-answer");
    await page.waitForSelector(".answer-dialog");
  });
  test("add question button opens modal window", async () => {
    await page.goto(APP);
    await page.waitForSelector(".add-q-btn");
    await page.click(".add-q-btn");
    await page.waitForSelector(".question-dialog");
  });
});

describe("test that QA Component is connected to store", () => {
  test("QA Component renders", () => {
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
});
