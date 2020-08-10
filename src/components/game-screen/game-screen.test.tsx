import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import {GameScreenComponent} from "./game-screen";
import {GameType} from "../../types";
import {history} from "../../history";
import {noop} from "../../utils/utils";


const children = <div className="children-component" />;


describe(`Render GameScreen`, () => {
  describe(`when game type is "ARTIST"`, () => {
    const props = {
      type: GameType.ARTIST,
      children,
      mistakes: 3,
      goToWelcome: noop,
    };


    it(`Should match with snapshot`, () => {
      const gameScreenSnapshot = renderer.create(
          <Router history={history} >
            <GameScreenComponent {...props} >
              {children}
            </GameScreenComponent>
          </Router>
      ).toJSON();

      expect(gameScreenSnapshot).toMatchSnapshot();
    });
  });


  describe(`when game type is "GENRE"`, () => {
    const props = {
      type: GameType.GENRE,
      children,
      mistakes: 3,
      goToWelcome: noop,
    };


    it(`Should match with snapshot`, () => {
      const gameScreenSnapshot = renderer.create(
          <Router history={history} >
            <GameScreenComponent {...props} >
              {children}
            </GameScreenComponent>
          </Router>
      ).toJSON();

      expect(gameScreenSnapshot).toMatchSnapshot();
    });
  });
});
