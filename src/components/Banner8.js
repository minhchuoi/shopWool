import React from 'react'
import Card from './Card'

const Banner8 = () => {
    return (
        <div className='banner-8 container'>
            <h3 className='header-banner-8'>4 REASONS TO CHOOSE MERINO</h3>
            <div className='solid-3'></div>
            <div className='banner-8-2 row'>
                <Card
                    srcImg='./imgs/bn8-1.jpg'
                    header='4 SEASON WEAR'
                    title='Merino Wool is a fabric that never gets in your way but helps regulate your body temperature, so you stay comfortable from summer running and hiking through winter skiing.'
                ></Card>
                 <Card
                    srcImg='./imgs/bn8-2.jpg'
                    header='PREVENTS ODOR'
                    title='Naturally anti-microbial. Unlike synthetic fabrics that cling to odors and body oils, Woolx performance clothing naturally repels sweat and body oils so you always feel confident.'
                ></Card>
                 <Card
                    srcImg='./imgs/bn8-3.jpg'
                    header='WICKS MOISTURE'
                    title='Stay dry and comfortable even after strenuous workouts and hot summer days. Woolx merino wool clothing targets sweat and quickly transfers it away from your skin’s surface.'
                ></Card>
                 <Card
                    srcImg='./imgs/bn8-4.jpg'
                    header='EASY CARE'
                    title='Machine washable and dryable. Simply turn it inside out and toss it in the wash with your other clothes. Woolx holds it shape without shrinking wash after wash.'
                ></Card>
            </div>
        </div>
    )
}

export default Banner8;