import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
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


class App extends React.Component {
  componentDidMount() {  // метод жизненного цикла
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized)
      return <Preloader />
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    )
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);  
