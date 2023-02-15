import { FC, useState } from "react";
import { nanoid } from "nanoid";
import { createRoot } from "react-dom/client";
import { MessageP } from "./style";
import { ObjectToHtmlStyle } from "@src/utils/css";
import { MessageItemProps, Notice, MessageType } from "./type";

//todo 增加svg的显示
const MessageItem: FC<MessageItemProps> = (props) => {
  const { text } = props;
  return (
    <MessageP>
      <span>{text}</span>
    </MessageP>
  );
};

let add: (message: Notice) => void;
const containerId = `container_message`;

function getContainer() {
  let resDom = document.querySelector(containerId) as HTMLElement;
  if (!resDom) {
    resDom = document.createElement("div");
    resDom.id = containerId;
    ObjectToHtmlStyle(
      {
        position: "fixed",
        top: "10px",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: "9999",
      },
      resDom
    );
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
        <MessageItem {...msg} key={msg.key} />
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
//todo ！！！ 改成动态创建
