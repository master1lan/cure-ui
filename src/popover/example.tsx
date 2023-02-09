import Button from "@src/button";
import { useState } from "react";
import Popover from ".";

export default function PopoverExample() {
  return (
    <>
      <Popover defaultOpen={false} content={<Content />}>
        <Button>show</Button>
      </Popover>
    </>
  );
}

const Content = () => <div>hello</div>;
