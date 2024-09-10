import React from "react";

import './promo.scss';
import './menu.scss';
import '../../index.scss';
import './script.js'
const Promo = () => {
    return (
        <section className="promo">
        <div className="menu">
            <div className="menu__wrapper">
                <div className="menu__logo">
                    LOGO
                </div>
                <div className="menu__city">
                    Дмитров
                </div>
                <div className="menu__phone">
                    <a href="tel:+79256455711" className="header__phone">8 (925) 645-57-11</a> <br/>
                    <a href="tel:+74999999999" className="header__phone">8 (499) 999-99-99</a> 
                </div>
                <div className="menu__blinds">
                    <div className="menu_blids-item">
                        <img src="furniture_store/public/icons/blinds.svg" alt=""/>
                    </div> 
                    <div className="menu__blinds-text">
                        Lorem
                    </div>
                </div>
        
                <div className="menu__rolls">
                    <div className="menu_blids-item">
                        <img src="./icons/rolls.svg" alt=""/>
                    </div> 
                    <div className="menu__rolls-text">
                        Lorem
                    </div>
                </div>
        
                <div className="menu__mosquito">
                    <div className="menu_blids-item">
                        <img src="./icons/mosquito.svg" alt=""/>
                    </div> 
                    <div className="menu__mosquito-text">
                        Lorem
                    </div>
                </div>
        
                <div className="menu__plisse">
                    <div className="menu_blids-item">
                        <img src="./icons/plisse.svg" alt=""/>
                    </div> 
                    <div className="menu__plisse-text">
                        Lorem
                    </div>
                </div>
        
                <div className="menu__electrician">
                    <div className="menu_blids-item">
                        <img src="./icons/electrician.svg" alt=""/>
                    </div> 
                    <div className="menu__electrician-text">
                        Lorem
                    </div>
                </div>
        
                <div className="menu__external">
                    <div className="menu_blids-item">
                        <img src="./icons/external.svg" alt=""/>
                    </div> 
                    <div className="menu__external-text">
                        Lorem
                    </div>
                </div>
        
                <div className="menu__photoprinting">
                    <div className="menu_blids-item">
                        <img src="./icons/photo_printing.svg" alt=""/>
                    </div> 
                    <div className="menu__photoprinting-text">
                        Lorem
                    </div>
                </div>
        
                <div className="menu__vector">
                    <div className="menu_blids-item">
                        <img src="./icons/vector.svg" alt=""/>
                    </div> 
                    <div className="menu__vector-text">
                        Lorem
                    </div>
                </div>
        
                <div className="menu__stock">
                    <div className="menu_blids-item">
                        <img src="./icons/stock.svg" alt=""/>
                    </div> 
                    <div className="menu__stock-text">
                        Lorem
                    </div>
                </div>
        
                <div className="menu__calculator">
                    <div className="menu_blids-item">
                        <img src="./icons/calculator.svg" alt=""/>
                    </div> 
                    <div className="menu__calculator-text">
                        Калькулятор
                    </div>
                </div>
        
                <div className="menu__search">
                    <div className="menu__search-input">
                        <input className="input" name="name" required placeholder="Поиск" type="text"/>
                    </div>
                </div>
        
                <nav>
                    <ul className="menu__list">
                        <li className="menu__link"><a href="#">О компании</a></li>
                        <li className="menu__link"><a href="#">Отзывы</a></li>
                        <li className="menu__link"><a href="#">Коммерческим покупателям</a></li>
                        <li className="menu__link"><a href="#">Контакты</a></li>
        
                    </ul>
                </nav>
            </div>
        </div>
        <aside className="sidepanel">
            <div className="sidepanel__wrapper">
                <div className="sidepanel__wrapper_logo">
                    <button className="circle">
                        <img className="circle__img" src="./icons/LOGO.svg" alt=""/>
                    </button>
                </div>
    
                <div className="sidepanel__wrapper_burger">
                    <img src="./icons/burger.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_blinds">
                    <img src="./icons/blinds.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_rolls">
                    <img src="./icons/rolls.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_mosquito">
                    <img src="./icons/mosquito.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_plisse">
                    <img src="./icons/plisse.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_electrician">
                    <img src="./icons/electrician.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_external">
                    <img src="./icons/external.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_photoprinting">
                    <img src="./icons/photo_printing.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_vector">
                    <img src="./icons/vector.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_stock">
                    <img src="./icons/stock.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_calculator">
                    <img src="./icons/calculator.svg" alt=""/>
                </div>
    
                <div className="sidepanel__wrapper_search">
                    <img src="./icons/short_search.svg" alt=""/>
                </div>
            </div>
        </aside>

        <div className="container">
            <div className="promo__buttons">
                <div className="promo__buttons-order">
                    <button className="submit">Заказать замер</button>
                </div>
                <div className="promo__buttons-shoppingcart">
                    <button className="circle">
                        <img className="circle__img" src="./icons/shopping_cart.svg" alt=""/>
                    </button>
                </div>
            </div>
            <div className="promo__descr">
                <h1><span className="bold">Купите <br/></span> что-то <br/>  <span className="bold">и еще</span> шторы</h1>
            </div>
            <div className="promo__subdescr">
                «Lorem» — производитель изделий для внутренней и внешней <br/>lorem
            </div>
            <div className="promo__calculator">
                <button className="calculator">калькулятор</button>
            </div>
            <div className="promo__slide">
                <div className="promo__slide-left"><i className="left"></i><p/></div>
                <div className="promo__slide-text">1/3</div>
                <div className="promo__slide-right"><i className="right"></i><p/></div>
            </div>
        </div>
    </section>
    )
}

export default Promo;