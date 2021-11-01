import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { focusHandling } from "cruip-js-toolkit";
import AOS from "aos";

// import Home from "./TPO/Home";

// import Logout from "./components/Login/Logout";
import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";
import ResetPassword from "./components/ResetPassword";

import Header from "./TPO/components/Header";
import Footer from "./TPO/components/Footer";
import Dashboard from "./TPO/Dashboard";
import AddJob from "./TPO/AddJob";
import AddCompany from "./TPO/AddCompany";
import AllCompany from "./TPO/AllCompany";
import CompanyProfile from "./TPO/CompanyProfile";
import JobProfile from "./TPO/JobProfile";
import StudentProfile from "./TPO/StudentProfile";
import AllStudents from "./TPO/AllStudents";

function TPOApp() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  const { setToken } = useToken();

  const links = [
    {
      name: "All Companies",
      nav: "all-company",
    },
    {
      name: "All Students",
      nav: "all-students",
    }
  ];

  return (
    <>
      <Header type="dashboardTpo" nav={links} />
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/all-students">
          <AllStudents title="All Students" />
        </Route>
        <Route exact path="/all-company">
          <AllCompany title="All Companies" />
        </Route>

        <Route exact path="/companies/:id/jobs/:id">
          <JobProfile />
        </Route>
        <Route exact path="/companies/:id">
          <CompanyProfile />
        </Route>

        <Route exact path="/studentprofile/:id">
          <StudentProfile />
        </Route>

        <Route exact path="/add-company">
          <AddCompany />
        </Route>
        <Route exact path="/add-job">
          <AddJob />
        </Route>
        <Route exact path="/login">
          <Login setToken={setToken} />
        </Route>
        {/* <Route exact path="/logout">
          <Logout />
        </Route> */}
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default TPOApp;
