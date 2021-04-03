import React,{useEffect,useState} from 'react'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Product from './Product';

const api = new WooCommerceRestApi({
  url: "https://dev.maladesdepeche.com/",
  consumerKey: "ck_0d9be79565847d48b05de15bb714452c5c95891a",
  consumerSecret: "cs_23bea0c5d1b3cf8a09491a464f64fab8b9f7b424",
  version: "wc/v3"
});


export default function Products() {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        api.get("products", {
          per_page: 10, // 20 products per page
          _embed:'',
        })
          .then((response) => {
            // Successful request
            console.log("Response Status:", response.status);
            console.log("Response Headers:", response.headers);
            console.log("Response Data:", response.data);
            console.log("Total of pages:", response.headers['x-wp-totalpages']);
            console.log("Total of items:", response.headers['x-wp-total']);
            setProducts(response.data)
            console.log(products)

          })
          .catch(err=>console.log(err))

        },[]);
        
        if( products && products.length > 0 ){ 
            return ( products.map( (product) => <Product key={product.id} product={product} /> ) );
            } else {
            return ( 
                <h4 className="text-white text-center">loading</h4>
                )

        }

    
}
