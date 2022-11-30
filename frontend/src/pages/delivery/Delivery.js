import React from 'react';
import './index.scss';
import img from "./dImage/del.svg";
function Delivery(props) {
    console.log(window.innerWidth);
    return (
        <div className='delClass'>
        <img className='delImage' src={img} alt="background" width={1440} height={751} />
        <div className='headerText'>
            <div className='pText'>
                <p>Доставка</p>
            </div>
            <div className='pLastText'>
                <p>Возьмём на себя все заботы по созданию, оформлению и доставке корпоративных букетов в обычные и праздничные дни за разумные деньги</p>
            </div>
        </div>
        </div>
     
    );
}

export default Delivery; 