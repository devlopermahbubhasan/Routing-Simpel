import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link,
} from "react-router-dom";
import './App.css';
import FriendDetals from "./Component/FriendDetals/FriendDetals";
import Home from "./Component/Home/Home";
import Nomatch from "./Component/Nomatch/Nomatch";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
           <Home/>
        </Route>
        <Route path="/friend/:friendid">
          <FriendDetals/>
        </Route>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route path="*">
           <Nomatch/>
        </Route>
       </Switch>
    </Router>
    

  );
}

export default App;
