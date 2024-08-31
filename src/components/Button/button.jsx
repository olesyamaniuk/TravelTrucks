import css from "./button.module.css";

export default function Button({ text, type, onClick }) {
  return (
    <div>
      <button className={css.button} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}