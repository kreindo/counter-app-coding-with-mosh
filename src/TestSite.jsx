import React from "react";
import Nav from "./Nav";
import MatNav from "./components/MatNav";
import PaperPack from './PaperPack'

function TestSite() {

  

  return (
    <div  style={{ backgroundColor: '#8d6e63', height: '100%' }}>
      <Nav />
      <MatNav />
      {/* <h1 style={{ textAlign: 'center'}} className={'m-4 text-dark'}>welcome aboard</h1> */}
      <PaperPack/>
      <PaperPack/>
      <PaperPack/>
    </div>
  );
}

export default TestSite;
