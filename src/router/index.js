import React from "react";
import { Route, Routes } from "react-router";
import Main from "../pages/Main";
import News from "../pages/News";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
  );
};

export default AppRouter;
