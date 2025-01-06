function Card(props){
return(
    <>
<div 
style={{
    backgroundColor:'whitesmoke',
    padding:'30px',
    borderRadius:'10px',
    width:'30%',
    margin:'10px'
}}
>
    <button
    style={{
        backgroundColor:"rgba(142, 150, 170, .14)",
        border:'none',
        padding:'7px 10px',
        fontSize:'x-large',
        borderRadius:'5px'
    }}
    >{props.button}</button>
<h3>{props.h3}</h3>
    <p>{props.p}</p>
</div>
</>
)
}
export default Card;