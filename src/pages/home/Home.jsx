import React from 'react';
import Category from '../../components/category/Category';
import Contact from '../../components/contact/Contact';
import FeaaturedProducts from '../../components/featuredProdducts/FeaaturedProducts';
import Slider from '../../components/slider/Slider';

const Home = () => {
    return (
        <div >
            <Slider />
            <FeaaturedProducts type={'Featured'} />
            <Category/>
            <FeaaturedProducts type={'Popular'} />
            <Contact/>
        </div>
    );
};

export default Home;
