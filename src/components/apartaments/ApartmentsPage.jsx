import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import ApartmentsExp from "./Apartments";
import Footer from "../footer/Footer";
// eslint-disable-next-line import/no-named-as-default
import SearchPane from "../search-panel/SearchPanel";
import "../../App.css";
import "../search-panel/SearchPanel.css";

function Apartments() {
  const [dataFromPanel, setdataFromPanel] = useState();

  const parentFunction = (dataFromChild) => {
    setdataFromPanel({ dataFromChild });
  };

  const name = useLocation();

  if (name.state !== undefined) {
    return (
      <>
        <Carousel title="Apartments" />
        <SearchPane
          name={name.state.name}
          /* eslint-disable-next-line react/jsx-no-bind */
          functionCallFromParent={parentFunction.bind(this)}
        />
        <ApartmentsExp name={name.state.name} valueFromParent={dataFromPanel} />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Carousel title="Apartments" />
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <SearchPane functionCallFromParent={parentFunction.bind(this)} />
      <ApartmentsExp valueFromParent={dataFromPanel} />
      <Footer />
    </>
  );
}

export default Apartments;
