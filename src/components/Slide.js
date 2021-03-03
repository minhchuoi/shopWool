import React from 'react'

const Slide = (props) => {
    return (
        <div className={props.classSlide}>
            <img src={props.srcImg} class="imgSlide d-block w-100" alt="..."></img>
            <div className="title-slide carousel-caption d-none d-md-block h-100">
                <p className='header-slide'>{props.header}</p>
                <div className='solid-2'></div>
                <p className='title-x'>{props.title1}</p>
                <p id='tacgia'className='title-x'>{props.title2}</p>
                <a ><p className='link-slide'>{props.linkSlide}</p></a>
            </div>
        </div>

    )
}

export default Slide;
