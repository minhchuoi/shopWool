import React from 'react'
import ButtonMenu from './ButtonMenu'

const Header = () => {
    return (
        <div>
            <div className='promo_banner'>
                <div className='promo_banner_content'>
                    <p>
                        <a>
                            FREE US SHIPPING AND EXCHANGES
                        </a>
                    </p>
                </div>
            </div>
            <div className="top-bar clearfix">
                <ul className='menu float-left'>
                    <li>
                        <a>000-000-000</a>
                    </li>
                </ul>
                <div className='cart_container float-right'>
                    <a>
                        <img src='./imgs/user.png' height='14px'></img>
                        LOG IN
                    </a>
                    <a>
                        <img src='./imgs/shopping-cart.png' height='14px'></img>
                        0
                    </a>

                </div>
            </div>
            <div className='main_nav-wrapper'>
                <div className='main_nav clearfix'>
                    <div className='x1 float-left'>
                        <a>
                            <img src='./imgs/x1.png' height='40px'></img>
                            WOOLX
                        </a>
                    </div>
                    <div className='nav float-left'>
                        <ul className='nav-menu'>
                            <ButtonMenu nameButton="SHOP MEN'S"></ButtonMenu>
                            <ButtonMenu nameButton="SHOP WOMEN'S"></ButtonMenu>
                            <ButtonMenu nameButton="BY CATEGORY"></ButtonMenu>
                            <li class="dropdown">
                                <a id='nav-sale' class="dropbtn">SALE</a>
                            </li>
                        </ul>

                    </div>
                    <div className='search float-right'>
                        <div id='input'>
                            <input id='search' placeholder='Search'></input>
                            <a><img src='./imgs/loupe.png' height='20px'></img></a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header;