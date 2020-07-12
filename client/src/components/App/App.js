import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import API from "../../lib/API";
import TokenStore from "../../lib/TokenStore";
import AuthContext from "../../contexts/AuthContext";
import Navigation from "../../components/Navigation/Navigation";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Secret from "../../pages/Secret/Secret";
import NotFound from "../../pages/NotFound/NotFound";
import News from "../../pages/News/News";
import Details from "../../pages/Details/Details";

import Reviews from "../../pages/Reviews/Reviews";
import Profile from "../../pages/Profile/Profile";
import TopRatedMovies from "../../pages/TopRatedMovies /TopRatedMovies";
import TopRatedTVShows from "../../pages/TopRatedTVShows/TopRatedTVShows";
import FooterPage from "../Footer/Footer";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState((prevState) => ({
        auth: { ...prevState.auth, user, authToken },
      }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState((prevState) => ({
        auth: { ...prevState.auth, user: undefined, authToken: undefined },
      }));
    };

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout,
      },
    };
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then((response) => response.data)
      .then((user) =>
        this.setState((prevState) => ({ auth: { ...prevState.auth, user } }))
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className="App">
          <Navigation />
          <div className="container appContainer">
            
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/secret" component={Secret} />
              <PrivateRoute exact path="/News" component={News} />
              <PrivateRoute exact path="/Profile" component={Profile} />
              <PrivateRoute path="/Details" component={Details} />
              <PrivateRoute exact path="/Reviews" component={Reviews} />
              <PrivateRoute exact path="/TopRatedMovies" component={TopRatedMovies} />
              <PrivateRoute
                exact
                path="/TopRatedTVShows"
                component={TopRatedTVShows}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
          <FooterPage/>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
