import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';
import {CSSTransition, TransitionGroup} from "react-transition-group";
//components
import {Header} from './components/Header/Header';
import {Sign} from './components/Sign/Sign';
import {RecoveryPassword} from './components/RecoveryPassword/RecoveryPassword'
import {ChangePassword} from './components/ChangePassword/ChangePassword'
let App = () => {
  return (
    <div className="App">
      <Header/>
      <Route render={({location}) => (
          // <TransitionGroup>
          //     <CSSTransition
          //         key={location.key}
          //         timeout={300}
          //         classNames='fade'
          //     >
                  <Switch location={location}>
                      <Route
                          exact
                          path='/sign'
                          render = {(props) => <Sign/>}
                      />
                      <Route
                          path='/recoveryPassword'
                          render = {(props) => <RecoveryPassword/>}
                      />
                      <Route
                          path='/changePassword'
                          render = {(props) => <ChangePassword/>}
                      />
                  </Switch>
          //     </CSSTransition>
          // </TransitionGroup>
      )}
          />
    </div>
  );
}

export default App;
