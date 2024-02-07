import React,{useEffect,useCallback} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedProducts, removeSelectedProducts } from '../Redux/ActionTypes/ActionTypes';

const ProductDetail=()=> {
    const product =useSelector((state)=>state.product);
    const { productId } = useParams()
    const {image,title,price,category,description}=product
    const dispatch=useDispatch()
    const fetchProductDetail=useCallback(async(productId)=>{
        const response= await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>console.log(err))
        dispatch(SelectedProducts(response.data))
    },[dispatch])
    useEffect(()=>{
        fetchProductDetail(productId)
        return(()=>{
          dispatch(removeSelectedProducts())
        })
    },[productId,dispatch,fetchProductDetail])
  return (
    <div className='ui grid container'>
      {Object.keys(product).length===0 ? (
        <div>...loading</div>):
        (
          <div className='ui placeholder segment'>
            <div className='ui two column stackable center aligned grid'>
              <div className='ui vertical divider'>AND</div>
              <div className='middle aligned row'>
                <div className='column lp'>
                  <img className='ui fluid image' src={image} alt='product'/>
                </div>
                <div className='column rp'>
                  <h1>{title}</h1>
                  <h2>
                    <a className='ui teal tag label' href='ab.com'>${price}</a>
                  </h2>
                  <h3 className='ui brown block header'>{category}</h3>
                  <p>{description}</p>
                  <div className='ui vertical animated button' tabIndex="0">
                    <div className='hidden content'>
                      <i className='shop icon'></i>
                    </div>
                    <div className='visible content'>Add to cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
        
        
    </div>
  )
}

export default ProductDetail
