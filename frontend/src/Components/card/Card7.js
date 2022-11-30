import React from 'react';
import '../../pages/Section/scss/Section3.scss'


const Card7 = ({ props }) => {
    return (
        <div className='Card'>
            {
                props.map(item => <div className='box'>
                    <div className='box-header'>
                        <div className='left-text'>
                        <span className='text1'>{item.leftCards.text1}</span>
                            <span className='text2'>{item.leftCards.text2}</span>
                            <span className='text3'>{item.leftCards.text3}</span>
                        </div>
                        <div className='img'>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='discount'>
                            <span className='discount'>{item.discount}</span>
                        </div>
                    </div>
                    <div className='box-body'>
                        <span className='text1'>{item.title}</span>
                        <span className='text2'>{item.title}</span>
                    </div>
                    <div className='box-footer'>
                        <div className='price'>
                            <span className='orginal-price'>{item.orginalPrice}</span>
                            <span className='priceWithDiscount'>{item.priceWithDiscount}</span>
                        </div>
                        <div className='button'>
                            <button>{item.buttonText}</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Card7;
