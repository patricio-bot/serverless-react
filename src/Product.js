import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Product = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const { productID } = useParams()

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`/api/products?id=${productID}`)
            setProduct(data)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
    useEffect(() => {

        fetchData()
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <section className="section section-center">
            <h2>loading...</h2>
        </section>
    }
    const { fields } = product
    const { name, price, desc, image } = fields
    const url = image[0].url

    return (
        <section className="section section-center">
            <Link to='/' className='link'>
                Back Home
           </Link>
            <div>
                <div className="title">
                    <h2>{name}</h2>
                    <div className="title-underline"></div>
                </div>
                <article className="single-product">
                    <img src={url} alt={name} className="single-product-img" />
                    <div>
                        <h5>{name}</h5>
                        <h5 className='price'>€{price}</h5>
                        <p>{desc}</p>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Product
