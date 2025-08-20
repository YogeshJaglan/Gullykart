import React from 'react';
import MainBanner from '../components/MainBanner'; // Capital M
import Categories from '../components/Categories';
import BestSeller from '../components/BestSeller';
import BottomBanner from '../components/BottomBanner';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner /> {/* Capital M */}
      <Categories/>
      <BestSeller/>
      <BottomBanner/>
      <NewsLetter/>
      <Footer/>
      
    </div>
  );
};

export default Home;
