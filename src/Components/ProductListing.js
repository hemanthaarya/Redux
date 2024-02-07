import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {SetProducts} from "../Redux/ActionTypes/ActionTypes"

function ProductListing() {
    const dispatch =useDispatch()
    const fetchProducts=async ()=>{
        const response=await axios.get("https://fakestoreapi.com/products").catch((err)=>
        console.log(err))
        dispatch(SetProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing