import React from 'react';
import Product from '../../Components/ProductPage/Product';
import ProductContent from '../../Components/ProductPage/productContent/ProductContent';
import Section1 from '../Section/Section1';
import Section2 from '../Section/Section2';
import Section3 from '../Section/Section3';
import Delivery from "../delivery/Delivery";
import Form from "../Form/Form";
import Contact from '../Contact/Contact';
import './scss/Home.scss'
const Home = () => {
    return (
        <div className='Home'>
            <Product />
            <ProductContent />
            <Section1 />
            <Section2 />
            <Section3 />
            <Delivery/>
            <Form/>
            <Contact/>
        </div>
    );
}

export default Home;
