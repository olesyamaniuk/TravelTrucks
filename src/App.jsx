import Layout from './components/Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CalatogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage.jsx'))
const NotFoundPage = lazy(
  () => import('./pages/NotFoundPage/NotFoundPage')
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<NotFoundPage />} />
    
      </Routes>
    </Layout>
  );
}
