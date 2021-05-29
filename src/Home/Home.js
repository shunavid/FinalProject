import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div class="content">
        <div className="tour-title">
          <h2>Sky Travels & Tours Agency</h2>
        </div>
        <div div className="contents">
          <Link className="first-one" to="/hajj">
            <h3>Hajj</h3>
          </Link>
          <Link className="second-one" to="/umrah">
            <h3>Umrah</h3>
          </Link>

          <Link className="third-one" to="help">
            <h3>Help</h3>
          </Link>

          <Link className="fourth-one" to="/gps">
            <h3>GPS</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

/* <div className="homepage">
//   <div className="content-space">
//     <div className="compo-haj">HAJ</div>
//     <div className="compo-umrah">Umrah</div>
//     <div className="compo-help">Help</div>
//     <div className="compo-gps">GPS</div>
//   </div>
// </div> */
