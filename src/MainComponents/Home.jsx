import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';

function Home() {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      <AppFooter />
    </>
  );
}

export default withRoot(Home);
