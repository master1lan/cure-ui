import Button from "@src/button";
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
