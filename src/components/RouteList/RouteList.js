import React from "react";
import { Route, Routes } from "react-router-dom";
import Page from "../Page";
import routeListData from "./data/route-list-data";

const RouteList = () => (
  <Routes>
    {routeListData.map((item, index) => {
      const { exact, path, content } = item;
      let { title } = item;
      if (!title) {
        title = content.name;
      }
      const key = `id-${index + 1}`;
      return (
        <Route
          key={key}
          exact={exact}
          path={path}
          element={
            <Page key={key} content={content} title={title} />
          }
        />
      );
    })}
  </Routes>
);

export default RouteList;
