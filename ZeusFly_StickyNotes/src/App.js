import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Archive from "./pages/Archive";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import Image from "./components/image"

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? (
                <Layout>
                <Notes />
              </Layout>) : (<Login setLoginUser={setLoginUser} />)
              // user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/image">
            <Image/>
          </Route>
          <Route
            exact
            path="/notes"
            render={(props) => (
              <Layout>
                <Notes />
              </Layout>
            )}
          />
          <Route
            exact
            path="/create"
            render={(props) => (
              <Layout>
                <Create />
              </Layout>
            )}
          />
          {/* <Route
            path="/archive"
            render={(props) => (
              <Layout>
                <Archive />
              </Layout>
            )}
          /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
