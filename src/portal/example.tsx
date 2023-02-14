import { useState } from "react";
import Portal from "./index";
import Button from "../button/index";

export default function PortalExample() {
  const [visible, set] = useState(false),
    handlerClick = () => set((item) => !item);
  return (
    <>
      <Button onClick={handlerClick}>click me</Button>
      {visible && (
        <Portal>
          <div>hello world!</div>
        </Portal>
      )}
    </>
  );
}
