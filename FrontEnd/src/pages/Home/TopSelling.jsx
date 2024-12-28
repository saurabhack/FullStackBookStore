import React, { useEffect, useState } from 'react'
import BookCard from '../Books/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination,Navigation } from 'swiper/modules';

const categories=['Choose a genere','Bussiness','Fiction','Horror','Adventure']
function TopSelling() {
    const [books,setBooks]=useState([])
    const [selectedCategory,setSelectedCategory]=useState('choose a genere')
    useEffect(()=>{
        fetch('book.json').
        then(res=>res.json().
        then((data)=>setBooks(data)))
    },[])

    const filterBooks= selectedCategory==="choose a genere" ? books : books.filter((book)=> {return book.category===selectedCategory.toLowerCase()})

    console.log("filtered Data===",filterBooks)
  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Top Selling</h2>
      <div className='mb-8 flex items-center'>
        <select name="category" onChange={(e)=>setSelectedCategory(e.target.value)} id="category" className='border bg-[#EAEAEA] border-gray-300 px-4 py-3 outline-none'>
{
    categories.map((cotegory,index)=>{
        return <option key={index} value={cotegory}>{cotegory}</option>
    })
}
        </select>
      </div>
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
        
        filterBooks.map((val,i)=>{
          return <SwiperSlide key={i}><BookCard  book={val}/></SwiperSlide> 
        })
      }
      </Swiper>
    </div>

  )
}

export default TopSelling
