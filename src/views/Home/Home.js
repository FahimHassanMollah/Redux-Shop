import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'

const Home = () => {
    const { products } = useSelector(state => state.productReducer)
    return (
        <>
            {/* <Header></Header> */}
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        products.map((product, index) => {
                            return (
                                <div className="col">
                                    <div className="card h-100">
                                        <img src={product.image} className="card-img-top" style={{ height:"350px" }} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </>
    )
}

export default Home
