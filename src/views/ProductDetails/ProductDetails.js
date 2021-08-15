import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BiPlus, BiMinus } from "react-icons/bi";
const ProductDetails = () => {
    const { id } = useParams()
    const { products } = useSelector(state => state.productReducer)
    const { product } = useSelector(state => state.productReducer)
    console.log(product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "singleProduct",
            payload: id
        })
        return () => {
            dispatch({
                type: "singleProduct",
                payload: -1
            })
        }
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 ">
                    <div className="w-100 text-left">
                        <img src={product.image} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-8 mt-3 mt-md-0 mt-lg-0 mt-xl-0">
                    <div>
                        <h2 className="fw-light text-dark text-capitalize">{product.name}</h2>
                        <div className="d-flex ">
                            <p className="text-danger fs-5 ">$<span className="text-line-through">{product.price}</span>  <span className="fs-6 text-secondary ">{product.discount}%</span></p>
                            <p className="text-dark fs-5 ps-5">${product.discountPrice}</p>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex">
                                <button className="quantity minus"><BiMinus></BiMinus></button>
                                <span className="quantity">1</span>
                                <button className="quantity plus"><BiPlus></BiPlus></button>
                            </div>
                            <div className="ps-3">
                                <button className="text-uppercase add-cart-btn" style={{ backgroundColor:"tomato" }}>Add to cart</button>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p>{product.desc }</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Details {id}</h1>
        </div>
    )
}

export default ProductDetails
