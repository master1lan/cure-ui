import ToolTip from '.';
import { Button } from '..';

export default function TooltipExample() {
  return (
    <>
      <ToolTip title={'hello'}>
        <Button>button</Button>
      </ToolTip>
    </>
  );
}
