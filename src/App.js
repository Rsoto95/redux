import "./App.css";
import Header from "./Components/Header/header";
import Videoplayer from "./Components/Videoplayer/videoPlayer";
import { FollowUs } from "./Components/FollowUs/followUs";
import { Footer } from "./Components/Footer/footer";
import { AboutUs } from "./Components/about-us/about-us";
import { Contact } from "./Components/Contact-us/contact-us";
import { Ranking } from "./Components/Ranking/ranking";
import Login from "./Components/Login/login.js";
import Topnav from "./Components/Top-Navigation/topnav";
import {Dashboards} from "./Components/dashboard/dashboard";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import {hashHistory} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Topnav />
                <Header />
                <Videoplayer />
                <FollowUs />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/about-us"
            element={
              <div>
                <Login />

                <Topnav />

                <Header />
                <AboutUs />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/contact-us"
            element={
              <div>
                <Login />

                <Topnav />

                <Header />
                <Contact />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/dashboard"
            element={
              <div>
                <Login />

                <Topnav />
                <Header />
                <Dashboards/>
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/Ranking"
            element={
              <div>
                <Login />

                <Topnav />

                <Header />
                <Ranking />
                <Footer />
              </div>
            }
          ></Route>

      

          <Route
            path="/userInfo"
            element={
              <div>
                <h1>I am the page that is going to collect the user info </h1>
              </div>
            }
          ></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
