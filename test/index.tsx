import ReactDOM from "react-dom/client";
import React, { useRef, useState } from "react";
import message from "@src/message";
import Button from "@src/button";
// import { message } from "../lib/index";
import Modal from "../src/modal/index";
import ToolTip from "@src/tooltip";
import Popover from "@src/popover";
import Input from "@src/input";

const _ButtonGroup = () => (
  <>
    <Button size='small'>small</Button>
    <Button size='middle'>middle</Button>
    <Button size='large'>large</Button>
    <Button shape='circle'>circle</Button>
    <Button shape='default'>default</Button>
    <Button shape='round'>round</Button>
  </>
);

const _inputGroup = () => (
  <>
    <Input defaultValue={"123"} onChange={() => {}} />
  </>
);

const _messagegroup = () => (
  <>
    <Button onClick={() => message.info("hello world" + Math.random() * 10)}>
      test message
    </Button>
  </>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    {/* <_ButtonGroup /> */}
    {/* <_inputGroup /> */}
    <_messagegroup />
  </div>
);
