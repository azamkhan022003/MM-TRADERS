import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollTop.css";

function ScrollTop() {

const [show,setShow]=useState(false);

useEffect(()=>{

const scroll=()=>{

setShow(window.scrollY>300);

};

window.addEventListener("scroll",scroll);

return()=>window.removeEventListener("scroll",scroll);

},[]);

return(

show&&(

<button

className="scroll-top"

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

>

<FaArrowUp/>

</button>

)

);

}

export default ScrollTop;