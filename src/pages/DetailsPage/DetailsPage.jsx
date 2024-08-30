import Filter from '../../components/Filter/Filter';
import css from './DetailsPage.module.css';

export default function CatalogPage() {
  return (
    <div className={css.container}>
        {/* <Location></Location> */}
        <Filter></Filter>
        
    </div>
  );
}