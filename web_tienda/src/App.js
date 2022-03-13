import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Carrito } from "./components/Carrito/Carrito";
import { Login } from "./components/Login/Login";
import { UserContext } from "./Context/UserContext";

function App() {
  const [user, setUser] = useState({ shopping: [] });

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path={"/dashboard"}>
                <Dashboard />
              </Route>
              <Route path={"/carrito"}>
                <Carrito />
              </Route>
              <Route path={"/login"}>
                <Login />
              </Route>
              <Route path={"/"}>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
