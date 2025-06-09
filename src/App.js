import React, { useState } from "react";
import PartSelectionPage from "./Pages/PartSelectionPage";

const App = () => {
  const setToDisplayCorrespondingFunction = (value) => {
    setToDisplay(value);
  };
  const [toDisplay, setToDisplay] = useState(
    <PartSelectionPage
      setToDisplayCorrespondingFunction={setToDisplayCorrespondingFunction}
    />
  );
  return <>{toDisplay}</>;
};

export default App;
