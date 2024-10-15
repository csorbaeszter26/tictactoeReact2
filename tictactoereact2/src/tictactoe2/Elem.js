
export default function Elem(props){

    function katt(){
        console.log("elem: ", props.i)
        props.katt(props.i)
    }
    return(
        <div className='mezo card col-lg-4' onClick={()=>katt()}>
        <p>{props.jel}</p>
        </div>
    )
}