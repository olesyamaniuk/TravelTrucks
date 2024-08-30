import { Suspense } from 'react';
import css from './Layout.module.css';
import Loader from '../Loader/Loader';
import Navigation from '../Navigation/Navigation';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
      </header>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}