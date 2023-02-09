import Input from ".";

export default function InputExample() {
  return (
    <>
      <Input
        defaultValue={"hello world"}
        onChange={() => console.log("changeing input value"!)}
      />
    </>
  );
}
