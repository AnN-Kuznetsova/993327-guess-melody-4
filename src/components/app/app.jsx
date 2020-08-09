import PropTypes from "prop-types";
import React from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducers/game/game";
import {AppRoute, GameType} from "../../const";
import {AuthorizationStatus} from "../../reducers/user/user";
import {AuthScreen} from "../auth-screen/auth-screen";
import {GameOverScreen} from "../game-over-screen/game-over-screen";
import {GameScreen} from "../game-screen/game-screen";
import {GuessArtistGameWithPlayer} from "../guess-artist-game/guess-artist-game";
import {GuessGenreGameWithPlayer} from "../guess-genre-game/guess-genre-game";
import {Operation as UserOperation} from "../../reducers/user/user";
import {PrivateRoute} from "../private-route/private-route";
import {Welcome} from "../welcome/welcome";
import {WinScreen} from "../win-screen/win-screen";
import {getStep, getMistakes, getMaxErrorsCount} from "../../reducers/game/selectors";
import {getQuestions} from "../../reducers/data/selectors";
import {getAuthorizationStatus} from "../../reducers/user/selectors";
import {history} from "../../history";


const AppComponent = (props) => {
  const {
    authorizationStatus,
    login,
    maxErrorsCount,
    mistakes,
    questions,
    step,
    onWelcomeButtonClick,
    onUserAnswer,
    resetGame,
  } = props;

  const renderGameScreen = () => {
    const question = questions[step];

    if (step === -1) {
      return (
        <Welcome
          maxErrorsCount={maxErrorsCount}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (mistakes > maxErrorsCount) {
      return (<Redirect to={AppRoute.LOSE} />);
    }

    if (step >= questions.length) {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return (<Redirect to={AppRoute.RESULT} />);
      } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return (<Redirect to={AppRoute.LOGIN} />);
      }

      return null;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen type={question.type}>
              <GuessArtistGameWithPlayer
                question={question}
                onAnswer={onUserAnswer}
                step={step}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <GuessGenreGameWithPlayer
                question={question}
                onAnswer={onUserAnswer}
                step={step}
              />
            </GameScreen>
          );
        default:
          return null;
      }
    }

    return null;
  };

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          {renderGameScreen()}
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen
            onSubmit={login}
            onReplayButtonClick={resetGame}
          />
        </Route>
        <Route exact path={AppRoute.LOSE}>
          <GameOverScreen
            onReplayButtonClick={resetGame}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.RESULT}
          render={() => {
            return (
              <WinScreen
                questionsCount={questions.length}
                mistakesCount={mistakes}
                onReplayButtonClick={resetGame}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
};


AppComponent.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  maxErrorsCount: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  step: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  step: getStep(state),
  maxErrorsCount: getMaxErrorsCount(state),
  questions: getQuestions(state),
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);


export {
  AppComponent,
  App,
};
