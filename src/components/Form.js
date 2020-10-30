export default function Form({ setInputText }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const input = document.querySelector(".todo__input"); // ToDo: Verschlanken?
        setInputText(input.value);
      }}
    >
      <input
        type="text"
        placeholder="Was willst du dun?"
        className="todo__input"
      ></input>
    </form>
  );
}
