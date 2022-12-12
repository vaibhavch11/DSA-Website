import { useState, useEffect } from "react";
export default function ExComp() {
  const [Comp, setComp] = useState(null);
  useEffect(() => {
    import("@excalidraw/excalidraw").then((comp) => setComp(comp.default));
  }, []);
  return <>{Comp && <Comp />}</>;
}