import { useState } from "react"

export default function Card (props){
  

    const [selected , setSelected] = useState(false)
    return(
        <>
            <div onClick={()=>props.toggle(props.id)} style={{order : props.id}} className={props.is ? "selected card" : "card"}>{props.number}</div>
        </>
    )
}


//{display : "none"}