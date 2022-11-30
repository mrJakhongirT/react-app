import React, { useState } from 'react';
import Card from '../../Components/card/Card';
import Card2 from '../../Components/card/Card2';
import Card3 from '../../Components/card/Card3';
import Card4 from '../../Components/card/Card4';
import Card5 from '../../Components/card/Card5';
import Card6 from '../../Components/card/Card6';
import Card7 from '../../Components/card/Card7';
import Card8 from '../../Components/card/Card8';
import romashki from '../../images/ramashki.png'
import ramka from '../../images/ramka.png';
import './scss/Section3.scss'
const Section3 = () => {
    const [card, setCard] = useState([
        {
            img: romashki,
            leftCards: {
                text1: "ХИТ ПРОДАЖ",
                text2: "НОВИНКА",
                text3: "БУКЕТ ДНЯ",
            },
            discount: "Скидка 50%",
            title: "№225 “Ромашки для Наташки”",
            orginalPrice: "5 400 грн",
            priceWithDiscount: "3 700 грн",
            buttonText: "Заказать"
        }
    ])
    return (
        <div className='Section3'>
            <div className='text-img'>
                <img src={ramka} alt="img" className='img' />
                <h1 className='text'>Для кого</h1>
            </div>
            <div className='Cards'>
                <Card props={card} />
                <Card2 props={card} />
                <Card3 props={card} />
                <Card4 props={card} />
                <Card5 props={card} />
                <Card6 props={card} />
                <Card7 props={card} />
                <Card8 props={card} />
            </div>
        </div>
    );
}

export default Section3;
