import React from 'react'

const Card = (props) => {
    return (
        <div class="banner-card col-3">
            <div className='img-card d-flex justify-content-center'>
                <img src={props.srcImg}></img>
            </div>
            <p className='header-card'>{props.header}</p>
            <p className='title-card'>{props.title}</p>
        </div>
    )
}

export default Card;