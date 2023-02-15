import Button from '@src/button';
import Popover from '.';

export default function PopoverExample() {
  return (
    <>
      <Popover defaultOpen={false} content={<div>hello</div>}>
        <Button>show</Button>
      </Popover>
    </>
  );
}
