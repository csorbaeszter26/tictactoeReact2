import Elem from "./Elem.js"

export default function Jatekter(props){

    function katt(adat){
        console.log("játéktér: ", adat)
        //ezt a fvényt kéne hívnia a gyerek komponensnek
        props.katt(adat)
    }


    return(
        <div className='Jatekter'>
        {
            props.LISTA.map((elem, index)=>{
                return(<Elem jel={elem} key={index} i={index} katt={katt}/>)
            })
        }
            
        </div>
    )
}