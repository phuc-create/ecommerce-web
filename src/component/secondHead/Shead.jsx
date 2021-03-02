import React,{useState} from 'react';
import Logo from "../../img/mylogo.png";
import { GoSearch } from "react-icons/go";
import {  GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose ,AiOutlineShoppingCart} from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import "./Shead.css";

function Shead() {
    const [block,setBlock] = useState(false);
    return (
        <div className="second-head">
        <div className={block ? 'overlay active' : 'overlay'}></div>
        <div className="media-down">
            <form className="search-hidden">
                <p>Search</p>
                <GoSearch className="icons-search" onClick={()=>{
                    setBlock(!block);
                }} />
                <div className={block ? 'block-search active' : 'block-search' }>
                <div className="text-search">
                    <h3>TYPE TO SEARCH</h3>
                    <AiOutlineClose className="icons-close" onClick={()=>{setBlock(!block)}}/>
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
                <ul className="full-drop">
                    <li><a href="/">Home</a></li>
                    <li className="f-drop">
                    <a href="/">Shop</a>
                    <ul className="drop-down">
                        <li><a href="/">Product Variation</a></li>
                        <li><a href="/">Cart</a></li>
                        <li><a href="/">Checkout</a></li>
                        <li><a href="/">My Account</a></li>
                    </ul>
                    </li>
                    <li className="f2-drop"><a href="/">Pages</a>
                        <ul className="drop-down-second">
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>                    
                    </li>
                    <li><a href="/">Classic products</a></li>
                </ul>
                </div>
            </nav>
            <div className="user-cart">
                <div className="user-info">
                    <a href="/"><GrUserExpert /></a>
                    <div class="subbox">                                    
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
                <div className="user-cart-shop">
                    <a href="/"><AiOutlineShoppingCart /><span>0</span></a>
                </div>
                <div className="bar-3"><GiHamburgerMenu /></div>
            </div>
            </div>
        </div>
    )
}

export default Shead;
