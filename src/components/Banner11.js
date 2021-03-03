import React, { useState } from 'react'
import List from './List-bn11'

const Banner11 = () => {
    const arr1 = ['Contact Us. Questions', 'Returns and Exchanges', 'FAQ Page', 'Garment Care',
        'Gift Cards', 'Shipping Information', 'Woolx Guarantee', 'Authenticity', 'Privacy']
    const arr2 = ['About Merino Wool', 'Brand Ambassador"s Program', 'Woolx Journal', 'Ethically Sourced Wool', 'My Account Login',
        'Meet The Team']
    return (
        <div className='banner-11'>
            <div className='container col-12 row' >
                <div className='list-1 col-2'>
                    <h6>CUSTOMER SERVICE</h6>
                    <ul>
                        {
                            arr1.length > 0 && arr1.map((item, index) =>
                                <List
                                    key={index}
                                    item={item}
                                ></List>
                            )
                        }

                    </ul>
                </div>
                <div className='list-1 col-2'>
                    <h6>HELPFUL INFO</h6>
                    <ul>
                        {
                            arr1.length > 0 && arr2.map((item, index) =>
                                <List
                                    key={index}
                                    item={item}
                                ></List>
                            )
                        }

                    </ul>
                </div>
                <div className='mxh col-2'>
                    <a><img src='./imgs/instagram.png' height='35px'></img></a>
                    <a><img src='./imgs/facebook.png' height='35px'></img></a>
                    <a><img src='./imgs/p.png' height='35px'></img></a>
                </div>
            </div>

            <p className='end'>© 2021 Woolx.</p>
        </div>
    )
}

export default Banner11;