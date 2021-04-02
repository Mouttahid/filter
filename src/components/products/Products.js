import React,{useEffect,useState} from 'react'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Product from './Product';

const api = new WooCommerceRestApi({
  url: "https://www.filtremaroc.com/",
  consumerKey: "ck_88449088097e6e874d02a09a050ffc92c2c9c1b2",
  consumerSecret: "cs_feae8386a907b754a34739dfa2965d7f27e03497",
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
          .catch((error) => {
            // Invalid request, for 4xx and 5xx statuses
            console.log("Response Status:", error.response.status);
            console.log("Response Headers:", error.response.headers);
            console.log("Response Data:", error.response.data);
          })

        },[]);
        
        if( products && products.length > 0 ){ 
            return ( products.map( (product) => <Product key={product.id} product={product} /> ) );
            } else {
            return ( 
                <h4>loading</h4>
                )

        }

    
}
