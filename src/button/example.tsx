import Button from ".";

export default function ButtonExample() {
  return (
    <>
      <div>
        <Button size='small'>small</Button>
        <Button size='middle'>middle</Button>
        <Button size='large'>large</Button>
      </div>
      <div>
        <Button shape='circle'>circle</Button>
        <Button shape='default'>default</Button>
        <Button shape='round'>round</Button>
      </div>
    </>
  );
}
