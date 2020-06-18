import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {ERRORS_COUNT} from "../../__test-data__/test-mocks.js";


const props = {
  errorCount: ERRORS_COUNT,
};


describe(`Render App`, () => {
  it(`Should match with snapshot`, () => {
    const welcomeScreenSnapshot = renderer.create(<App {...props} />).toJSON();
    expect(welcomeScreenSnapshot).toMatchSnapshot();
  });
});
