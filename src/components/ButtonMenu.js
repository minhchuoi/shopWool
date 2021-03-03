import React from 'react'

const ButtonMenu = (props) => {

    return (
        <li class="dropdown">
            <a class="dropbtn">{props.nameButton}<img src='./imgs/drop-down.png' height='10px' className='arow-drop'></img></a>
            <div class="dropdown-content">
                <a href="#">SHIRTS & SWEATERS</a>
                <a href="#">HOODIES</a>
                <a href="#">JACKETS</a>
                <a href='#'>JEANS</a>
            </div>
        </li>
    )
}

export default ButtonMenu;