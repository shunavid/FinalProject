import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar/sidebar";
import Home from "./Home/Home";
import QuickInfo from "./QuickInfo/videos";
import Attendance from "./Attendance/attendance";
import Register from "./Register/Register";
import { client } from "./Client";
import Gps from "./component/Gps";
import Help from "./component/Help";
import Hajj from "./component/Hajj/Hajj";
import Umrah from "./component/Umrah/Umrah";
import Login from "./Login/Login";
// import ImageCarousel from "./component/ImageCarousel";
// import InfoVideos from "./component/InfoVideos";

function App() {
  const [articles, setArticles] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        const { items } = response;
        // console.log(items);
        // console.log(items[0].fields.image[0].fields.file.url);
        setArticles(items);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      <Sidebar isAdmin={isAdmin} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {isAdmin && (
            <Route path="/attendance">
              <Attendance />
            </Route>
          )}
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
          {!isAdmin && (
            <Route path="/Login">
              <Login setIsAdmin={setIsAdmin} />
            </Route>
          )}
        </Switch>
      </main>
    </div>
  );
}
export default App;
// { "metadata.tags.sys.id[in]": "tagOne,tagTwo" }
