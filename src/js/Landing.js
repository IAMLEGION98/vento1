import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import AssetList from "./AssetList";
import Overview from "./Overview";
import UploadCsv from "./UploadCsv";
import MultiCreateAsset from "./MultiCreateAsset";
const Landing = props => {
  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <SideBar />,
      component: () => <Overview />
    },
    {
      path: "/assetlist",
      exact: true,
      sidebar: () => <SideBar />,
      component: () => <AssetList props={props}/>
    },
    {
      path: "/overview",
      exact: true,
      sidebar: () => <SideBar />,
      component: () => <Overview />
    },
    {
      path: "/multicreateasset",
      exact: true,
      sidebar: () => <SideBar />,
      component: () => <MultiCreateAsset history={props.history}/>
    }
  ];

  return (
    <div>
      <Header hist={props.history} />
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.sidebar />}
            />
          ))}
        </Switch>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.component />}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default Landing;
