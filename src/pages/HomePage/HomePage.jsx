import css from './HomePage.module.css';
import Button from '../../components/Button/button'; 
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/catalog'); 
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Button text="View Now" type="button" className={css.button} onClick={handleButtonClick} />
      </div>
    </section>
  );
}