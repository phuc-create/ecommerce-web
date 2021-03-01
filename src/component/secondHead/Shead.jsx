import React from 'react';
import Logo from "../../img/logo2.PNG";
import { GoSearch } from "react-icons/go";
import {  GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose ,AiOutlineShoppingCart} from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import "./Shead.css";

function Shead() {
    return (
        <div className="second-head">
        <div className="overlay"></div>
        <div className="media-down">
            <form className="search-hidden">
                <p>Search</p>
                <GoSearch className="icons-search" />
                <div className="block-search">
                
                <div className="text-search">
                    <h3>TYPE TO SEARCH</h3>
                    <AiOutlineClose className="icons-close"/>
                </div>
                <div className="search-bar">
                <input type="text" name="search-hi" placeholder="search products..." />
                <GoSearch className="icons-search2"/>
                </div>
                </div>
            </form>
            <nav className="navbar">
            <div className="logo"><img src={Logo} alt="logo"/></div>
            <div className="navbar-down">
            <form className="inside-nav">
                <input  type="text" name="search-hi" placeholder="search products..." />
                 <GoSearch />
            </form>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>
                    <a href="/">Shop</a>
                    <ul>
                        <li><a href="/">Product Variation</a></li>
                        <li><a href="/">Cart</a></li>
                        <li><a href="/">Checkout</a></li>
                        <li><a href="/">My Account</a></li>
                    </ul>
                    </li>
                    <li><a href="/">Pages</a>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>                    
                    </li>
                    <li><a href="/">Classic products</a></li>
                </ul>
                </div>
            </nav>
            <div className="user-cart">
                <a href="/"><GrUserExpert /></a>
                <a href="/"><AiOutlineShoppingCart /></a>
                    <div class="subbox">
					<div class="menu">
                    <ul>
                        <li class="page_item"><a href="/">Home</a></li>
                        <li class="page_item"><a href="/">About</a></li>
                        <li class="page_item"><a href="/">Blog</a></li>
                        <li class="page_item"><a href="/">Cart</a></li>
                        <li class="page_item"><a href="/">Cart</a></li>
                        <li class="page_item"><a href="/">Checkout</a></li>
                        <li class="page_item"><a href="/">Checkout</a></li>
                        <li class="page_item"><a href="/">Contact</a></li>
                        <li class="page_item"><a href="/">My account</a></li>
                        <li class="page_item"><a href="/">My Account</a></li>
                        <li class="page_item"><a href="/">Sample Page</a></li>
                        <li class="page_item"><a href="/">Sample Page</a></li>
                        <li class="page_item"><a href="/">Sample Page</a></li>
                        <li class="page_item"><a href="/">Sample Page</a></li>
                        <li class="page_item"><a href="/">Shop</a></li>
                        <li class="page_item"><a href="/">Wishlist</a></li>
                    </ul>
                    </div>
				    </div>
            <div className="bar-3"><GiHamburgerMenu /></div>
            </div>
            </div>
        </div>
    )
}

export default Shead;
