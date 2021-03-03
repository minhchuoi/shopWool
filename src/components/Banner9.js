import React from 'react'
import CardBn from './Card-bn9'

const Banner9 = () => {
    return (
        <div className='banner-9'>
            <div className="pro col-12 row">
                <div className='banner-9-1 col row'>
                    <div className='banner-9-1 col'>
                        <CardBn></CardBn>
                        <CardBn></CardBn>
                    </div>
                    <div className='banner-9-1 col'>
                        <CardBn></CardBn>
                        <CardBn></CardBn>
                    </div>  
                </div>
                <div className='banner-9-2 col d-flex justify-content-center'>
                    <a className="mid-bn">
                        <img src='./imgs/bn9-mid.jpg' class='pro2' height='448px'></img>
                        <div class='mid-ig'>
                            <img src='./imgs/instagram.png' className="ss" height='60px'></img>
                            <p>SHOP OUR INSTAGRAM</p>
                        </div>
                    </a>
                </div>
                <div className='banner-9-1 col row'>
                    <div className='banner-9-1 col'>
                        <CardBn></CardBn>
                        <CardBn></CardBn>
                    </div>
                    <div className='banner-9-1 col'>
                        <CardBn></CardBn>
                        <CardBn></CardBn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner9;