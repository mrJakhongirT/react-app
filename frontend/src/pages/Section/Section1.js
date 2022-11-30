import React from 'react';
import './scss/Section1.scss'
import leftImage1 from '../../images/photo1.png'
import rigthImage from '../../images/photo2.png'
import leftImage2 from '../../images/photo3.png'
import flower1 from '../../images/flower1.png'
import flower2 from '../../images/flower2.png'

const Section1 = () => {
    return (
        <div className='Section'>
            <h1 className='text'>Почему именно мы?</h1>
            <div className='first-card'>
                <img src={leftImage1} alt="img" className='left-image' />
                <div className='card-flower'>
                    <img src={flower1} alt="img" className='flower1' />
                    <div className='card'>
                        {/* desktop */}
                        <span className='desktop-text'>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант. Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</span>
                        {/* mobile */}
                        <span className='mobile-text'>
                            Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант.
                        </span>
                    </div>
                    <img src={flower2} alt="img" className='flower2' />
                </div>
            </div>
            <div className='second-card'>
                <img src={rigthImage} alt="img" className='rigth-image' />
                <div className='card-flower'>
                    <div className='card'>
                        <span>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</span>
                    </div>
                    <img src={flower2} alt="img" className='flower2' />
                </div>
            </div>
            <div className='third-card'>
                <img src={leftImage2} alt="img" className='left-image' />
                <div className='card'>
                    <span>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</span>
                </div>
            </div>
        </div>
    );
}

export default Section1;
