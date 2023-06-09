function Cart(props){
    return(
        <div>
    {(props.fruitsArray).map((item,index)=>(
    <ul>
        <li>{item}</li>
    </ul> 
    ))}
        </div>
    )
}
export default Cart;