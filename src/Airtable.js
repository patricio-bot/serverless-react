import React, { useState, useEffect } from 'react'
import axios from 'axios'


const url = '/api/products'
const Airtable = () => {
    const [products, setProducts] = useState([])
    const fetchData = async () => {
        try {
            const { data } = await axios.get(url)
            setProducts(data)
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <section className="section section-center">
            <div className="title">
                <h2>Airtable</h2>
                <div className="title-underline"></div>
            </div>
            <div className="products">
                {products.map((product) => {
                    const { id, url, price, name } = product
                    return <article className="product" key={id}>
                        <img src={url} alt={name} />
                        <div className="info">
                            <h5>{name}</h5>
                            <h5 className='price'>€{price}</h5>
                        </div>
                    </article>
                })}
            </div>
        </section>
    )
}

export default Airtable