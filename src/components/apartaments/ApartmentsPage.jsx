import React from 'react';

import Carousel from '../carousel/Carousel';
import ApartmentsExp from './Apartments';
import Footer from '../footer/Footer';
import SearchPanel from '../search-panel/SearchPanel';

import '../../App.css';
import '../search-panel/SearchPanel.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


function Apartments() {

  const [dataFromPanel, setdataFromPanel] = useState()

  const parentFunction = (data_from_child) => {
    setdataFromPanel({ data_from_child });
  }

  const name = useLocation()

  if (name.state !== undefined) {
    return (
      <>
        <Carousel title="Apartments" />
        <SearchPanel name={name.state.name} functionCallFromParent={parentFunction.bind(this)} />
        <ApartmentsExp name={name.state.name} valueFromParent={dataFromPanel} />
        <Footer />
      </>
    );
  } else {
    console.log(dataFromPanel)
    return (
      <>
        <Carousel title="Apartments" />
        <SearchPanel functionCallFromParent={parentFunction.bind(this)} />
        <ApartmentsExp  valueFromParent={dataFromPanel}/>
        <Footer />
      </>
    );
  }

}

export default Apartments;
