import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar/sidebar";
import Home from "./Home/Home";
import QuickInfo from "./QuickInfo/videos";
import Attendance from "./Attendance/attendance";
import Register from "./Register/register";
import { client } from "./Client";
import Gps from "./component/Gps";
import Help from "./component/Help";
import Hajj from "./component/Hajj";
import Umrah from "./component/Umrah";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        const { items } = response;
        setArticles(items);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/attendance">
            <Attendance />
          </Route>
          <Route path="/quickInfo">
            <QuickInfo infos={articles} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/gps">
            <Gps />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/hajj">
            <Hajj />
          </Route>
          <Route path="/umrah">
            <Umrah />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;
