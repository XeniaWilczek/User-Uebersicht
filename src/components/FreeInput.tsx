import "./FreeInput.scss";

function FreeInput({ text }: { text: string }) {
  return (
    <>
      <label>
        {text}
        <input type="text"></input>
      </label>
    </>
  );
}
export default FreeInput;
