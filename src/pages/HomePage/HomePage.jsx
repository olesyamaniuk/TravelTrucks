import css from './HomePage.module.css';


export default function HomePage() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <button className={css.button}>View Now</button>
      </div>
    </section>
  );
}