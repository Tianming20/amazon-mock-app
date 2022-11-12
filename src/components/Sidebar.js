import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components'



export default props => {
    return (
        <Menu>
            <a className="menu-item" >
                Home
            </a>

            <a className="menu-item">
                Electric
            </a>

            <a className="menu-item" >
                Bag
            </a>

            <a className="menu-item" >
                Pharmacy
            </a>

            <a className="menu-item" >
                Clothing
            </a>

            <a className="menu-item">
                Sport
            </a>
        </Menu>
    );
};