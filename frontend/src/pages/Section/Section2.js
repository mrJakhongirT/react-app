import React from 'react';
import './scss/Section2.scss'
import flower1 from '../../images/photo4.png'
import flower2 from '../../images/photo5.png'
import flower3 from '../../images/photo6.png'
import flower4 from '../../images/photo7.png'
import flower5 from '../../images/photo8.png'
import flower6 from '../../images/photo9.png'
import flower7 from '../../images/photo10.png'
// mobile 
import flower8 from '../../images/mobile-images/photo1.png'
import flower9 from '../../images/mobile-images/photo2.png'
import flower10 from '../../images/mobile-images/photo3.png'
import flower11 from '../../images/mobile-images/photo4.png'
import flower12 from '../../images/mobile-images/photo5.png'
import flower13 from '../../images/mobile-images/photo6.png'
import flower14 from '../../images/mobile-images/photo7.png'
import TopLeftPattern from '../../images/top-left-pattern.png'
import BottomLeftPattern from '../../images/bottom-left-pattern.png'
import TopRigthPattern from '../../images/top-rigth-pattern.png'
import BottomRigthPattern from '../../images/bottom-rigth-pattern.png'
const Section2 = () => {
    return (
        <div className='Section2'>
            <span className='catelog'>Каталог</span>
            {/* desktop */}
            <div className='desktop-boxes'>
                <div className='left-box'>
                    <div className='card'>
                        <div className='first-child-box'>
                            <img src={flower1} alt="img" className="flower1" />
                            <div className='card'>
                                <div className='left-pattern'>
                                    <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                    <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                                </div>
                                <span className='text'>Для кого</span>
                                <div className='rigth-pattern'>
                                    <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                    <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                                </div>
                            </div>
                        </div>
                        <div className='second-child-box'>
                            <div className='first-child-box'>
                                <img src={flower2} alt="img" className="flower1" />
                                <div className='card'>
                                    <div className='left-pattern'>
                                        <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                        <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                                    </div>
                                    <span className='text'>Сладости</span>
                                    <div className='rigth-pattern'>
                                        <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                        <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='center-box'>
                    <div className='top-card'>
                        <img src={flower3} alt="img" className='flower' />
                        <div className='card'>
                            <div className='top-pattern'>
                                <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                            </div>
                            <span className='text'>Подарки</span>
                            <div className='bottom-pattern'>
                                <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                            </div>
                        </div>
                    </div>
                    <div className='center-card'>
                        <div className='top-card'>
                            <img src={flower4} alt="img" className='flower' />
                            <div className='card'>
                                <div className='top-pattern'>
                                    <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                    <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                                </div>
                                <span className='text'>Букеты</span>
                                <div className='bottom-pattern'>
                                    <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                    <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <div className='top-card'>
                            <img src={flower5} alt="img" className='flower' />
                            <div className='card'>
                                <div className='top-pattern'>
                                    <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                    <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                                </div>
                                <span className='text'>Розы</span>
                                <div className='bottom-pattern'>
                                    <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                    <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rigth-box'>
                    <div className='card'>
                        <div className='first-child-box'>
                            <img src={flower6} alt="img" className="flower1" />
                            <div className='card'>
                                <div className='left-pattern'>
                                    <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                    <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                                </div>
                                <span className='text'>Праздничная коллекция</span>
                                <div className='rigth-pattern'>
                                    <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                    <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                                </div>
                            </div>
                        </div>
                        <div className='second-child-box'>
                            <div className='first-child-box'>
                                <img src={flower7} alt="img" className="flower1" />
                                <div className='card'>
                                    <div className='left-pattern'>
                                        <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                        <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                                    </div>
                                    <span className='text'>Комнатные растения</span>
                                    <div className='rigth-pattern'>
                                        <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                        <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className='mobile-boxes'>
                <div className='first-card'>
                    <div className='card-image'>
                        <img src={flower8} alt="img" className='img' />
                        <div className='card'>
                            <div className='left-pattern'>
                                <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                            </div>
                            <span className='text'>Для кого</span>
                            <div className='rigth-pattern'>
                                <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                            </div>
                        </div>
                    </div>
                    <div className='card-image'>
                        <img src={flower9} alt="img" className='img' />
                        <div className='card'>
                            <div className='left-pattern'>
                                <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                            </div>
                            <span className='text'>Сладости</span>
                            <div className='rigth-pattern'>
                                <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='last-card'>
                    <div className='card-image'>
                        <img src={flower10} alt="img" className='img' />
                        <div className='card'>
                            <div className='left-pattern'>
                                <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                            </div>
                            <span className='text'>Подарки</span>
                            <div className='rigth-pattern'>
                                <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                            </div>
                        </div>
                    </div>
                    <div className='card-image'>
                        <img src={flower11} alt="img" className='img' />
                        <div className='card'>
                            <div className='left-pattern'>
                                <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                            </div>
                            <span className='text'>Букеты</span>
                            <div className='rigth-pattern'>
                                <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='third-card'>
                    <div className='card-image'>
                        <img src={flower12} alt="img" className='img' />
                        <div className='card'>
                            <div className='left-pattern'>
                                <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                            </div>
                            <span className='text'>Розы</span>
                            <div className='rigth-pattern'>
                                <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                            </div>
                        </div>
                    </div>
                    <div className='card-image'>
                        <img src={flower13} alt="img" className='img' />
                        <div className='card'>
                            <div className='left-pattern'>
                                <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                            </div>
                            <span className='text'>Праздничная коллекция</span>
                            <div className='rigth-pattern'>
                                <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fourth'>
                    <div className='card-image'>
                        <img src={flower14} alt="img" className='img' />
                        <div className='card'>
                            <div className='left-pattern'>
                                <img src={TopLeftPattern} alt="img" className='left-first-pattern' />
                                <img src={BottomLeftPattern} alt="img" className='left-last-pattern' />
                            </div>
                            <span className='text'>Комнатные растения</span>
                            <div className='rigth-pattern'>
                                <img src={TopRigthPattern} alt="img" className='rigth-first-pattern' />
                                <img src={BottomRigthPattern} alt="img" className='rigth-last-pattern' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;
