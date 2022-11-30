import bgc from "../../../images/product.svg";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/swiper-bundle.css'
import './ProductContent.scss';
import SwiperCore, { Navigation, Pagination } from 'swiper';
const ProductContent = (props) => {
    SwiperCore.use([Navigation, Pagination]);
    let swiperSlides = [];
    let slides = [];
    for (let i = 0; i < 8; i++) {
        slides.push(<SwiperSlide id={'swiper-slide'} key={i}>
            <img className={'swiper-img'} src={bgc} alt="" />
        </SwiperSlide>);
    }
    for (let i = 0; i < 6; i++) {
        swiperSlides.push(<SwiperSlide style={{ width: 284 }} key={i}>
            <div className="product-card">
                <div className="top">
                    <div className="product-btn-box">
                        <button>ХИТ ПРОДАЖ</button>
                        <button>НОВИНКА</button>
                        <button>БУКЕТ ДНЯ</button>
                    </div>
                    <img src={bgc} alt="" />
                    <button className="discount">
                        Скидка 50%
                    </button>
                </div>
                <div className="bottom">
                    <p>№225 “Ромашки для Наташки” </p>
                    <p>№225 “Ромашки для Наташки” </p>
                    <div className="btn-row">
                        <div className="txt-part">
                            <p>5 400 грн</p>
                            <p>3 700 грн</p>
                        </div>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>)

    }
    return (
        <div className="content">
            <div className="container">
                <div className="product-content">
                    <div className="left">
                        <img className="flower" src={bgc} alt="" />
                        <Swiper id={'main'} navigation={true} slidesPerView={4}>
                            {slides}
                        </Swiper>
                    </div>
                    <div className="right">
                        <div className="btn-box">
                            <button>ХИТ ПРОДАЖ</button>
                            <button>Скидка 50%</button>
                            <button>НОВИНКА</button>
                            <button>БУКЕТ ДНЯ</button>
                        </div>
                        <div className="text-part">
                            <div className="text">
                                <p>Отзывов (1)</p>
                                <p>Есть в наличие</p>
                            </div>
                            <div className="item">
                                <div className="item-title">
                                    Повод:
                                </div>
                                <div className="item-text">
                                    8 марта. 9 мая. Любовь
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-title">
                                    Кому:
                                </div>
                                <div className="item-text">
                                    Маме. Девушке. Женщине. Учителю. Теще. Друзьям
                                </div>
                            </div>
                        </div>
                        <div className="row-box">
                            <div className="count-box">
                                <p><i className="fa-solid fa-minus"></i></p>
                                <p>1</p>
                                <p><i className="fa-solid fa-plus"></i></p>
                            </div>
                            <div className="discount">
                                <p>5 400 грн</p>
                                <p>3 700 грн</p>
                            </div>
                            <button className={'sell'}>В корзину</button>
                        </div>
                        <div className="right-footer">
                            <div className="title">
                                Описание:
                            </div>
                            <div className="text">
                                Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="likes">
                    <h1>Отзывы (1):</h1>
                    <h6>Отзыв от Лена Ленина </h6>
                    <p>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.</p>
                </div>
                <div className="products-swiper">
                    <h1 className={'title'}>Вместе покупают</h1>
                    <Swiper effect={"cube"} modules={[Pagination]} slidesPerView={4} pagination={{ clickable: true }} id={'swiper2'}>
                        {swiperSlides}
                    </Swiper>
                    <div className="media-cards">
                        <div className="product-card">
                            <div className="top">
                                <div className="product-btn-box">
                                    <button>ХИТ ПРОДАЖ</button>
                                    <button>НОВИНКА</button>
                                    <button>БУКЕТ ДНЯ</button>
                                </div>
                                <img src={bgc} alt="" />
                                <button className="discount">
                                    Скидка 50%
                                </button>
                            </div>
                            <div className="bottom">
                                <p>№225 “Ромашки для Наташки” </p>
                                <p>№225 “Ромашки для Наташки” </p>
                                <div className="btn-row">
                                    <div className="txt-part">
                                        <p>5 400 грн</p>
                                        <p>3 700 грн</p>
                                    </div>
                                    <button>Заказать</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="top">
                                <div className="product-btn-box">
                                    <button>ХИТ ПРОДАЖ</button>
                                    <button>НОВИНКА</button>
                                    <button>БУКЕТ ДНЯ</button>
                                </div>
                                <img src={bgc} alt="" />
                                <button className="discount">
                                    Скидка 50%
                                </button>
                            </div>
                            <div className="bottom">
                                <p>№225 “Ромашки для Наташки” </p>
                                <p>№225 “Ромашки для Наташки” </p>
                                <div className="btn-row">
                                    <div className="txt-part">
                                        <p>5 400 грн</p>
                                        <p>3 700 грн</p>
                                    </div>
                                    <button>Заказать</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="top">
                                <div className="product-btn-box">
                                    <button>ХИТ ПРОДАЖ</button>
                                    <button>НОВИНКА</button>
                                    <button>БУКЕТ ДНЯ</button>
                                </div>
                                <img src={bgc} alt="" />
                                <button className="discount">
                                    Скидка 50%
                                </button>
                            </div>
                            <div className="bottom">
                                <p>№225 “Ромашки для Наташки” </p>
                                <p>№225 “Ромашки для Наташки” </p>
                                <div className="btn-row">
                                    <div className="txt-part">
                                        <p>5 400 грн</p>
                                        <p>3 700 грн</p>
                                    </div>
                                    <button>Заказать</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="top">
                                <div className="product-btn-box">
                                    <button>ХИТ ПРОДАЖ</button>
                                    <button>НОВИНКА</button>
                                    <button>БУКЕТ ДНЯ</button>
                                </div>
                                <img src={bgc} alt="" />
                                <button className="discount">
                                    Скидка 50%
                                </button>
                            </div>
                            <div className="bottom">
                                <p>№225 “Ромашки для Наташки” </p>
                                <p>№225 “Ромашки для Наташки” </p>
                                <div className="btn-row">
                                    <div className="txt-part">
                                        <p>5 400 грн</p>
                                        <p>3 700 грн</p>
                                    </div>
                                    <button>Заказать</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="top">
                                <div className="product-btn-box">
                                    <button>ХИТ ПРОДАЖ</button>
                                    <button>НОВИНКА</button>
                                    <button>БУКЕТ ДНЯ</button>
                                </div>
                                <img src={bgc} alt="" />
                                <button className="discount">
                                    Скидка 50%
                                </button>
                            </div>
                            <div className="bottom">
                                <p>№225 “Ромашки для Наташки” </p>
                                <p>№225 “Ромашки для Наташки” </p>
                                <div className="btn-row">
                                    <div className="txt-part">
                                        <p>5 400 грн</p>
                                        <p>3 700 грн</p>
                                    </div>
                                    <button>Заказать</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="top">
                                <div className="product-btn-box">
                                    <button>ХИТ ПРОДАЖ</button>
                                    <button>НОВИНКА</button>
                                    <button>БУКЕТ ДНЯ</button>
                                </div>
                                <img src={bgc} alt="" />
                                <button className="discount">
                                    Скидка 50%
                                </button>
                            </div>
                            <div className="bottom">
                                <p>№225 “Ромашки для Наташки” </p>
                                <p>№225 “Ромашки для Наташки” </p>
                                <div className="btn-row">
                                    <div className="txt-part">
                                        <p>5 400 грн</p>
                                        <p>3 700 грн</p>
                                    </div>
                                    <button>Заказать</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductContent;