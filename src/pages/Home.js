import React from 'react'
import Products from '../components/products/Products';
export default function Home() {
    return (
        <div className="container overflow-hidden">
            <div className="row bg-dark g-5 py-5">
                <Products/>
            </div>
        </div>
    )
}
