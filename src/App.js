import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import DashboardContainer from "./components/dashboard/DashboardContainer";

const App = () => {
  const [searchName, setSearchName] = useState("");

  return (
    <>
      <Header
        onSearch={e => {
          e.preventDefault();
          setSearchName(e.target.children[0].value);
        }}
      />
      <DashboardContainer searchName={searchName} />
    </>
  );
};

export default App;
