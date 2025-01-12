import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination,Navigation } from 'swiper/modules';
import BookCard from "../Books/BookCard";

function Recomended(){
    const [books,setBooks]=useState([])
        useEffect(()=>{
            fetch('book.json').
            then(res=>res.json().
            then((data)=>setBooks(data)))
        },[])
    

    return (
        <>
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6">Recomended For You</h2>
            <div className="">
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView:3,
            spaceBetween:50
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
      
        
        
      
      {
        
        books.slice(8,18).map((val,i)=>{
          return <SwiperSlide key={i}><BookCard  book={val}/></SwiperSlide> 
        })
      }
      </Swiper>
      </div>
        </div>
        </>
    )
}
export default Recomended