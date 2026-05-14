import ProductCard from "./productCard";

export default function TrendingProducts(){

    return(
<div>
        <h1>Trending Products</h1>
        <ProductCard 
            name="Mac book air" 
            price="150,000/=" 
            image="https://picsum.photos/id/1/200/300"
        />
        
        <ProductCard 
            name="Apple iphone" 
            price="120,000/=" 
            image="https://picsum.photos/id/3/200/300"
        />
                  
        <ProductCard 
            name="Dell Xps 13" 
            price="200,000/=" 
            image="https://picsum.photos/id/2/200/300"
        />
        
        <ProductCard 
            name="Lenovo i5 13" 
            price="180,000/=" 
            image="https://picsum.photos/id/8/200/300"
        />

</div>


    )



}