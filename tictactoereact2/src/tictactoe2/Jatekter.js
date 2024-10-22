import Elem from "./Elem.js"

export default function Jatekter(props){
    



    return(
        <div className='jatekter'>
        {
            props.LISTA.map((elem, index)=>{
                return(<Elem jel={elem} key={index} i={index}/>)
            })
        }
            
        </div>
    )
}