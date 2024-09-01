import Layout from './components/Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage.jsx'))
const Features = lazy(() => import("./components/Features/Features.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFoundPage = lazy(
  () => import('./pages/NotFoundPage/NotFoundPage')
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        {/* <Route path="/catalog/:carsId" element={<DetailsPage />}></Route> */}
        <Route path="/catalog/:carsId" element={<DetailsPage />}>
          <Route index element={<Features />} /> 
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
    
      </Routes>
    </Layout>
  );
}
