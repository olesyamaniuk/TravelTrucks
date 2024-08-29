import css from "./button.module.css"

export default function Button({text}) {
  return (
    <div>
      <button className={css.button} type="button">{text}</button>
    </div>
  );
}