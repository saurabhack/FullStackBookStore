import { Link } from "react-router-dom"
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import avatar from "../assets/avatar.png"
import { useState } from "react";
const navigation = [
    {
        name:"Dashbaord",
        href:"/dashboard",
    },
    {
        name:"Orders",
        href:"/orders",
    }
    ,{
        name:"Cart page",
        href:"/Cart",
    },
    {
        name:"Check Out",
        href:"/checkOut",
    }
]
function Navbar(){
    const currentUser=false
    const [isDropDownOpen,serIsDropDownOpen]=useState(false)
    console.log(isDropDownOpen)
    return(
        <>
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                <div className="flex items-center md:gap-16">
                    <Link to="/"><HiBars3BottomLeft className="size-6"/></Link>
                    <div className="relative sm:w-72 w-40 space-x-2">
                    <FaSearch className="absolute inline-block left-3 inset-y-2"/>
                    <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
                    </div>
                    
                </div>
                <div className="relative flex items-center md:space-x3 space-x-2">
                    <div className="">
                        {
                   
                    currentUser?
                    <>
                     <button onClick={()=>serIsDropDownOpen(!isDropDownOpen)}>
                        <img src={avatar} alt=""  className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500': ''}`}/>                        
                    </button> 
                    {
                        isDropDownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                <ul className="py-2">
                                    {
                                        navigation.map((val,i)=>{
                                            return <li key={i}>
                                                <Link to={val.href} className="block px-4 py-2 text-sm hover:bg-gray-400">
                                                {val.name}
                                                </Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }
                    </>
                    : <Link to="/login"><HiOutlineUser className="size-6"></HiOutlineUser></Link> 
                        }
                    </div>
                    
                    <button className="hidden sm:block">
                    <FaRegHeart className="size-6"/>
                    </button>
                    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
                    <FaCartPlus className="size-6"/>
                    <span className="text-sm font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header>
        </>
    )
}
export default Navbar