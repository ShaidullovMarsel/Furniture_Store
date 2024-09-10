import React from "react";

import './popular.scss';
import '../../index.scss';

const Popular = () => {
    return (
        <section className="popular">
        <div className="container__popular-text">
            <div className="popular__popular-text">
                Популярное
            </div>
        </div>  
        <div className="container">
            <div className="popular__wrapper">
                
                <a href="#" className="popular__wrapper-mosquitoes horizontal-mosquitoes">
                    <div className="wrapper__mosquitoes-text">
                        <span className="mosquitoes">Москитные</span> сетки
                    </div>
                    <img src="./img/mosquito_nets.png" alt="mosquito_nets"/>
                </a>
                <a href="#" className="popular__wrapper-flower">
                    <div className="wrapper__flower-text">
                        Lorem
                    </div>
                    <img src="./img/flower.png" alt="flower"/>
                </a>
                <a href="#" className="popular__wrapper-curtains horizontal-curtains">
                    <div className="wrapper__curtains-text">
                        Lorem
                    </div>
                    <img src="./img/curtains.png" alt="curtains"/>
                </a>
                <a href="#" className="popular__wrapper-wallpaper horizontal-wallpaper">
                    <div className="wrapper__wallpaper-text">
                        Lorem
                    </div>
                    <img src="./img/wallpaper.png" alt="wallpaper"/>
                </a>
            </div>
        </div>
    </section>
    )
}

export default Popular;