import React from 'react';
import "./contact.scss";
import logo from './ConImage/Logo.png'
import im1 from "./ConImage/1.png"
import im2 from "./ConImage/2.png"
import im3 from "./ConImage/3.png"
import im4 from "./ConImage/4.png"
import im5 from "./ConImage/5.png"
import im6 from "./ConImage/6.png"
import im7 from "./ConImage/7.png"
import im8 from "./ConImage/8.png"
import g1 from "./ConImage/g1.png"
import g2 from "./ConImage/g2.png"
import g3 from "./ConImage/g3.png"
function Contact(props) {
    return (
        <div className='contactClass'>
            <div className='logoClass '>
                <img src={logo} alt="logo" width={205} height={54} />
            </div>
            <div className='sweetList'>
                <img src={im1} alt="im1"  width={280} heigth={358}/>
                <img src={im2} alt="im2"  width={280} heigth={358}/>
                <img src={im3} alt="im3"  width={280} heigth={358}/>
                <img src={im4} alt="im4"  width={280} heigth={358}/>
                <img src={im5} alt="im5"  width={280} heigth={358}/>
                <img src={im6} alt="im6"  width={280} heigth={358}/>
                <img src={im7} alt="im7"  width={280} heigth={358}/>
                <img src={im8} alt="im8"  width={280} heigth={358}/>
               
            </div>
            <div className='lastContactClass'>
                <div className='pContactClass'><p>Контакты:</p></div>
                <div className='lastContactImage1'><img src={g1} alt="contact1"/></div>
                <div className='lastContactImage2'><img src={g2} alt="contact2"/></div>
                <div className='lastContactImage3'><img src={g3} alt="contact3"/></div>
                <div className='lastPContact'>
                    <p>©2021. Все права защищены </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;