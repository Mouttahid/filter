import React from 'react'

export default function Product({product}) {
    const image = (product.images.length > 0) ? product.images[0].src : 'https://dev.maladesdepeche.com/wp-content/uploads/2020/04/logo-malade-170x111.png' ;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 ">
    <div className="card align-between">
        <img class="card-img-top" src={image} alt="Card image cap" style={{height:200,width:"100%"}}/>
        <div class="card-body mr-2">
        <h5 class="card-title">{product.name.substring(0, 20)}</h5>
        <p dangerouslySetInnerHTML={{__html: product.price_html}} ></p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>
    )
}
