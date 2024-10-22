export default function ButtonComp({ text, title }) {
  const handleButtonClick = () => {
    console.log("Button was clicked.");
  };
  return (
    <button
      title={title}
      className="button-rounded"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}
