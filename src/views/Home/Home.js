import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Home = () => {
    const { products } = useSelector(state => state.productReducer)
    return (
        <>
            {/* <Header></Header> */}
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        products.map((product, index) => {
                            return (
                                <Link key={index} className="text-decoration-none product-wrapper" to={`product/details/${product.id}`}>
                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="overflow-hidden">
                                                <img src={product.image} className="image-height" alt={product.name} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title text-capitalize fw-light text-dark">{product.name}</h5>
                                                <div className="d-flex justify-content-between fw-light align-items-center">
                                                    <p className="text-danger fs-5 ">$<span className="text-line-through">{product.price}</span>  <span className="fs-6 text-secondary ">{product.discount}%</span></p>
                                                    <p className="text-dark fs-5">${product.discountPrice}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }



                </div>
            </div>
        </>
    )
}

export default Home
