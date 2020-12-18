import React from "react";
import Header from "./components/Header";
import PlayButtons from "./components/PlayButtons";
import DisplayResults from "./components/DisplayResults";

export const App = () => {

  return (
    <>
      <Header/>
      <PlayButtons/>
      <DisplayResults myChoice={"rock"}/>
    </>
  );
};

export default App;
