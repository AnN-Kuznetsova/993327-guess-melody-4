import React from "react";
import renderer from "react-test-renderer";
import {WelcomeScreen} from "./welcome-screen.jsx";


describe(`Render WelcomeScreen`, () => {
  it(`Render correcrty WelcomeScreen component`, () => {
    const props = {
      errorCount: 3,
    };

    const welcomeScreenComponent = renderer.create(<WelcomeScreen {...props} />).toJSON();

    expect(welcomeScreenComponent).toMatchSnapshot();
  });
});
