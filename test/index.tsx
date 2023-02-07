import ReactDOM from "react-dom/client";
import React, { useRef, useState } from "react";
import message from "@src/message";
import Button from "@src/button";
// import { message } from "../lib/index";
import Modal from "../src/modal/index";
import ToolTip from "@src/tooltip";
import Popover from "@src/popover";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div
    style={{
      width: "400px",
      height: "190px",
    }}
  >
    {/* <ToolTip title='tooltip'>
      <p
        style={{
          backgroundColor: "skyblue",
          height: "100px",
          width: "200px",
        }}
      >
        hello
      </p>
    </ToolTip> */}
    {/* <App /> */}
    {/* <TestPopOver /> */}
    <button onClick={() => message.info("hello")}>click me!</button>
  </div>
);

function TestPopOver() {
  return (
    <>
      <Popover defaultOpen={false} content={<p style={{}}>popover test</p>}>
        <button>hello popover</button>
      </Popover>
    </>
  );
}

function App() {
  const [visible, set] = useState(false);
  return (
    <>
      <button onClick={() => set((item) => !item)}>hello</button>
      <Modal visible={visible} closeModal={() => set((item) => !item)}>
        <p>123456</p>
      </Modal>
    </>
  );
}
