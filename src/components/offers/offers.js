import React from "react";
import axios from 'axios';
import {useEffect, useState} from 'react';

import './offers.scss';
import '../../index.scss';



const Offers = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );
            setPosts(result.data);
        };
        fetchData();
    }, []);

    
    return (
        <section class="offers">
            
        <div class="container">
            <div class="offers__descr">
                <div class="offers__descr-text">
                    Лучшие предложения
                </div>
                <div class="offers__descr-slide">
                    <div class="offers__slide-left"><i class="left"></i><p/></div>
                    <div class="offers__slide-text">1/3</div>
                    <div class="offers__slide-right"><i class="right"></i><p/></div>
                </div>
            </div>
            
            <div class="offers__items">
            
                <div class="offers__items-wrapper">
                {posts.map(item => (
                    <div class="offers__items-wrapp">
                    <div class="offers__item">
                        
                        <div class="offers__item-img">
                            <div class="offers__item-properties">
                                <div class="offers__properties-circle">
                                    <img src="./img/circle.svg" alt="circle"/>
                                </div>
                                <div class="offers__properties-precent">
                                    <img src="./img/precent.svg" alt="precent"/>
                                </div>
                                <div class="offers__properties-width">
                                    <img src="./img/width.svg" alt="230W"/>
                                </div>
                                <div class="offers__properties-discount">
                                    <button class="discount">
                                        <span class="disc">-10%</span>
                                    </button>
                                </div>
                            </div>
                            
                            <div class="offers__color">
                                <div class="offers__color-item">
                                    <div class="offers__color-grey">
                                        <img src="./img/grey.png" alt="grey"/>
                                    </div>
                                    <div class="offers__color-green">
                                        <img src="./img/green.png" alt="green"/>
                                    </div>
                                    <div class="offers__color-white">
                                        <img src="./img/white.png" alt="white"/>
                                    </div>
                                    <div class="offers__color-yellow">
                                        <img src="./img/yellow.png" alt="yellow"/>
                                    </div>
                                    <div class="offers__color-grey">
                                        <img src="./img/grey.png" alt="grey"/>
                                    </div>
                                    <div class="offers__color-green">
                                        <img src="./img/green.png" alt="green"/>
                                    </div>
                                    <div class="offers__color-more">
                                        <img src="./img/more_colors.png" alt="more"/>
                                    </div>
                                </div>
                            </div>
                            <img class ="main__image" src="./img/blinds_first.jpeg" alt="blinds_first"/>
                        </div>
                        
                        <div class="offers__item-wrapper">
                            <div class="offers__item-descr" key={item.id}>
                            {item.name};
                            </div>
                            <div class="offers__item-price">
                                <div class="offers__item-from">
                                    от
                                </div>
                                <div class="offers__item-newprice">
                                    {item.address.geo.lat}
                                </div>
                                <div class="offers__item-oldprice">
                                    <div class="offers__oldprice-line"></div>
                                    {item.address.geo.lng}
                                </div>
                            </div>
                            <div class="offers__item-bid">
                                <div class="offers__item-submit">
                                    <button class="submit">оформить заявку</button>
                                </div>
                                <div class="offers__item-shoppingcart">
                                    <img src="./icons/cart.svg" alt="cart"/>
                                </div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    
                </div> 
                ))}
            </div>
            
        </div>
        
    </div>
    
    
    </section>
    )
}

export default Offers;