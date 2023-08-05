import { useEffect, useState, useContext } from "react";
import {useNavigate} from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import  Search  from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {


    //header ko sticky krne ke liye bna rhe h useeffect or useState
    const [scrolled,setScrolled]=useState(false)
    const [showCart,setShowCart]=useState(false)
    const [showSearch,setShowSearch]=useState(false)
    const {cartCount} = useContext(Context)
    const navigate = useNavigate()
    const handleScroll=()=>{
        const offset= window.scrollY
    if(offset>200){
        setScrolled(true)
    } else{
         setScrolled(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[])
    return <>
    <header className={`main-header ${ scrolled ? 'sticky-header':""}`} >  
    {/* header me main-header class m ek or class add kra h to uske liye  main-header className ko curly bracket me liya h or backtick ka use kiya h kyuki template literals ka use krna tha means easily uske under javascipt likh skte h or  */}
    <div className="header-content">
        <ul className="left">
            <li onClick={()=> navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
        </ul>
        <div className="center" onClick={()=> navigate("/")}>E-commerce Store <sub>by Rahul</sub></div>
        <div className="right">
            <TbSearch onClick={()=>setShowSearch(true)}/>
            <AiOutlineHeart/>
            <span className="cart-icon" onClick={()=>setShowCart(true)}>
                <CgShoppingCart />
                {/* span add kiya kyuki merko cart wale icon pr koi item add hoga to usko dikhana h */}
               {!!cartCount && <span>{cartCount}</span>}
            </span>
        </div>
    </div>
    </header>
   {showCart && <Cart setShowCart={setShowCart} />}
   {showSearch && <Search  setShowSearch={setShowSearch}/>}
    </>
};

export default Header;
