import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import toast from 'react-hot-toast';
import axios from '../lib/axios';

const PeopleAlsoBought = () => {
    const [recommendations, setRecommendations]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        const fetchRecommendations= async()=>{
            try {
                const res= await axios.get("/products/recommendations");
                setRecommendations(res.data);
            } catch (error) {
                toast.error(error?.response?.data?.message || "An error occured while fetching recommedations")
                console.log(error?.response?.data?.message);
            } finally{
                setLoading(false);
            }
        }
        fetchRecommendations();
    },[])

    console.log("recomendation",recommendations);
  return (
    <div className='mt-8'>
        <h3 className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {
                recommendations.map((product)=>(
                    <ProductCard key={product._id} product={product}/>
                ))
            }
        </h3>
    </div>
  )
}

export default PeopleAlsoBought