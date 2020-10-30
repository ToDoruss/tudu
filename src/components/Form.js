export default function Form({ setTuduObject }) {
  const getDate = () => {
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    return `${day}|${month}|${year}`;
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const input = document.querySelector(".todo__input"); // ToDo: Verschlanken?
        setTuduObject({
          text: input.value,
          date: getDate(),
        });
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
