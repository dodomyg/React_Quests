import { useEffect, useState } from "react"


const UseEffect = () => {

    const [w,setW]=useState(window.innerWidth);

    useEffect(()=>{
       window.addEventListener('resize',()=>{
        setW(window.innerWidth)
       })

       return ()=>{
        window.removeEventListener('resize',()=>{})
       }
    },[])


  return (
    <div>
      {w}
    </div>
  )
}

export default UseEffect
