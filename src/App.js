import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sett from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { compose } from 'redux';


class App extends React.Component {
  componentDidMount() {  // метод жизненного цикла
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized)
      return <Preloader />
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Sett />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
          </div>
        </div>
    )
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJsApp = (props) => {
 return  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <AppContainer />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
}

export default SamuraiJsApp;