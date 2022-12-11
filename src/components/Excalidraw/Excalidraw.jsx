import React from 'react'
import { useState, useEffect } from "react";

const Excalidraw = () => {

 

  const [Comp, setComp] = useState(null);
  useEffect(() => {
    console.log("Use efect");
    import("@excalidraw/excalidraw").then((comp) => {
      setComp(comp.Excalidraw);
    });
  }, []);


 return (
  
      <>
        <h1> Excalidraw with Next </h1>
        <div style={{ height: "500px", margin: "150px", border:"1px solid black" }}>{Comp && <Comp />}</div>
      </>
    
  );
  
}

export default Excalidraw