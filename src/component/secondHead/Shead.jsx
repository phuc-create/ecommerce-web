import React,{useState} from 'react';
import Logo from "../../img/mylogo.png";
import { GoSearch } from "react-icons/go";
import {  GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose ,AiOutlineShoppingCart,AiFillCaretRight,AiOutlineCloseSquare} from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import "./Shead.css";

function Shead() {
    const [block,setBlock] = useState(false);
    const [openTag,setOpentag] = useState(false);
    const [openTags2,setOpentags2] = useState(false);
    const [openMedia,setOpenmedia] = useState(false);
    const OpenTags = () =>{
        setOpentag(!openTag);
    }
    const OpenTags2 = () =>{
        setOpentags2(!openTags2);
    }


    return (
        <div className="second-head">
        <div className={block|| openMedia ? 'overlay active' : 'overlay'}></div>
        <div className="media-down">
            <div className={openMedia ? 'close-media active' : 'close-media'} onClick={() =>{
                setOpenmedia(false);
            }}><AiOutlineCloseSquare className="ai-icons--close" /></div>
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

                <div className="user info" style={{fontSize:"24px "}}>
                    <FaUser />
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
                <div className="user cart-shop" style={{fontSize:"25px"}}>
                    <AiOutlineShoppingCart /><span>0</span>
                </div>
                <div className="user bar-3" onClick={()=>{
                    setOpenmedia(true);
                }}><GiHamburgerMenu  /></div>
            </div>
            <div className={openMedia ? 'navbar-down hidden active' : 'navbar-down hidden'}>
            <form className="inside-nav">
                <input type="text" name="search-hi" placeholder="search products..." />
                 <GoSearch className="inside-nav__icons-search" />
            </form>
                <ul className="full-drop media">
                    <li><a href="/">Home</a></li>
                    <li className={openTag ? 'f-drop active' :'f-drop'}>
                        <div className="f-drop__wrap">
                        <a href="/">Shop</a>
                        <div className={openTag ? 'icon-drop active' :'icon-drop'} onClick={OpenTags}>
                            <AiFillCaretRight className="drop-right" />
                            </div>
                        </div>
                    
                    <ul className="drop-down">
                        <li><a href="/">Product Variation</a></li>
                        <li><a href="/">Cart</a></li>
                        <li><a href="/">Checkout</a></li>
                        <li><a href="/">My Account</a></li>
                    </ul>
                    </li>
                    <li className={openTags2 ? 'f2-drop media-drop active' : 'f2-drop media-drop'} style={{marginTop:"5px"}}>

                        <div className="f-drop__wrap">
                        <a href="/">Pages</a>
                        <div className={openTags2 ? 'icon-drop active' :'icon-drop'} onClick={OpenTags2}>
                            <AiFillCaretRight className="drop-right" />
                            </div>
                        </div>
                        <ul className="drop-down-second">
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>                    
                    </li>
                    <li><a href="/">Classic products</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Shead;
