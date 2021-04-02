import React from 'react'

export default function Product({product}) {
    return (
        <div className='container-fluid'>
        <div className="card mx-auto col-md-3 col-10 mt-5 pt-4">
            <div className="d-flex sale">
                {product.on_sale && <div className="btn">SALE</div>}
                
            </div> <img className='mx-auto img-thumbnail' src={product.images[0].src} width="auto" height="auto" />
            <div className="card-body text-center mx-auto">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text" dangerouslySetInnerHTML={{__html: product.price_html}}></p>
            </div>
        </div>
    </div>
    )
}
