import { Button, message } from '..';

export default function MessageExample() {
  return (
    <>
      <Button onClick={() => message.info('message!')}>click me</Button>
    </>
  );
}
