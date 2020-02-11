import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import DashboardContainer from "./components/dashboard/DashboardContainer";

const App = () => {
  const [filteredName, setFilteredName] = useState("");

  return (
    <div className="App">
      <Header onFilter={e => setFilteredName(e.target.value)} />
      <DashboardContainer filteredName={filteredName} />
    </div>
  );
};

export default App;
