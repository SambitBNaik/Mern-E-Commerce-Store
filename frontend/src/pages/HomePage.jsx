import React from 'react'
import CategoryItem from '../components/CategoryItem';

const categories=[
  { herf:"/jeans", name:"Jeans", imageUrl: "/jeans.jpg" },
  { herf:"/t-shirts", name:"T-shirts", imageUrl: "/tshirts.jpg"},
  { herf:"/shoes", name:"Shoes", imageUrl:"/shoes.jpg"},
  { herf:"/glasses", name:"Glasses", imageUrl:"/glasses.png"},
  { herf:"/jackets", name:"Jackets", imageUrl:"/jackets.jpg"},
  { herf:"/suits", name:"Suits", imageUrl:"/suits.jpg"},
  { herf:"/bags", name:"Bags", imageUrl:"/bags.jpg"},

];

const HomePage = () => {
  return (
    <div className='relative min-h-screen text-white overflow-hidden'>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
           <h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
              Explore Our Categories
           </h1>
           <p className='text-center text-xl text-gary-300 mb-12'>
              Discover the latest trends in eco-friendly fashion
           </p>
           <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
               {
                categories.map((category)=>(
                  <CategoryItem category={category}  key={category.name}/>
                ))
               }
           </div>
        </div>
    </div>
  )
}

export default HomePage