import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSearch, FaUserAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Cart from '../cart/Cart';

const Navbar = () => {
    const [cart, setCart] = useState(false)
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <span><Link to='/'>StoreLogo</Link></span>
                </div>
                <div className='center'>
                    <div className='item'>
                        <img src='en.png' alt='' />
                        <IoIosArrowDown />
                    </div>
                    <div className='item'>
                        <span>USD</span>
                        <IoIosArrowDown />
                    </div>
                    <div className='item'>
                        <Link to='/products/1'>Women</Link>
                    </div>
                    <div className='item'>
                        <Link to='/products/2'>Men</Link>
                    </div>
                    <div className='item'>
                        <Link to='/products/3'>Children</Link>
                    </div>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link to='/'>Homepage</Link>
                    </div>
                    <div className='item'>
                        <Link to='/'>About</Link>
                    </div>
                    <div className='item'>
                        <Link to='/'>Contact</Link>
                    </div>
                    <div className='item'>
                        <Link to='/'>Store</Link>
                    </div>
                    <div className='icons'>
                        <FaSearch />
                        <FaUserAlt />
                        <FaHeart />
                    </div>
                    <div className='cart-item'>
                        <FaShoppingCart onClick={() => setCart(!cart)} />
                        <span>0</span>
                    </div>
                </div>
            </div>
                <Cart activeCart={cart}/>
        </div>
    );
};

export default Navbar;
