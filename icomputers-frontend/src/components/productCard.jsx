export default function ProductCard(props){

    console.log(props.name)

return(
    <div className="product-card border w-100">
        <h1>{props.name}</h1>
        <img src={props.image} alt={"Picture of a"+props.name} />
        <p>{props.price}</p>
        <button>Buy now</button>

    </div>
)


}
