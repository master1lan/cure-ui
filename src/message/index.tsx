import React, { FC, useState } from "react";
import { nanoid } from "nanoid";

import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { createRoot } from "react-dom/client";
type MessageType = "info";
interface MessageItemProps {
  text: string;
  type: MessageType;
}
const k_in = keyframes`
  from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`,
  k_out = keyframes`
0% {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`;
const MessageP = styled.p`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  padding: 12px 24px;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  animation: ${k_in} 0.1s linear, ${k_out} 0.1s linear 2.9s forwards;
`;
//todo 增加svg的显示
const MessageItem: FC<MessageItemProps> = (props) => {
  const { text, type } = props;
  return (
    <MessageP>
      <span>{text}</span>
    </MessageP>
  );
};

interface Notice extends MessageItemProps {
  key: string;
}
let add: (message: Notice) => void;
const containerId = `container_${nanoid(4)}`;
const containerClass = css({
  position: "fixed",
  top: "10px",
  left: "50%",
  transform: "translate(-50%, 0)",
  zIndex: "9999",
});
function getContainer() {
  let resDom = document.querySelector(containerId);
  if (!resDom) {
    resDom = document.createElement("div");
    resDom.id = containerId;
    //todo 添加classname

    resDom.className = containerClass.name;
    document.body.appendChild(resDom);
  }
  return resDom;
}

const MessageContainer = () => {
  const [msgList, setList] = useState<Notice[]>([]);
  //todo 改成options
  const timeout = 3000;
  const remove = (msg: Notice) =>
    setList((prevList) => prevList.filter((item) => msg.key !== item.key));
  //hack
  add = (msg) => {
    setList((pre) => [...pre, msg]);
    setTimeout(() => {
      remove(msg);
    }, timeout);
  };
  return (
    <>
      {msgList.map((msg) => (
        <MessageItem {...msg} />
      ))}
    </>
  );
};

const message = (() => {
  createRoot(getContainer()).render(<MessageContainer />);
  const msgType = (type: MessageType) => (text: string) =>
    add({ text, type, key: nanoid(3) });
  return {
    info: msgType("info"),
  };
})();

export default message;
