import React, {useState} from "react";
import Header from "./components/Header";
import PlayButtons from "./components/PlayButtons";
import DisplayResults from "./components/DisplayResults";

export const App = () => {
  const [userChoice, setUserChoice] = useState()

  return (
    <>
      <Header/>
      <PlayButtons callBack={(buttonUserChoice) => setUserChoice(buttonUserChoice)}/>
      <DisplayResults myChoice={userChoice} computerChoice={"paper"}/>
    </>
  );
};

export default App;
