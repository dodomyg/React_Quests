import {useNavigate} from "react-router-dom"
const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full p-4 gap-x-5">
      <div className="text-3xl border border-black w-[200px] h-[200px]" onClick={()=>navigate('/products')}>
        <h1>All Products</h1>
        <p>pro</p>
      </div>
      <div className="text-3xl border border-black w-[200px] h-[200px]">
        <h1>Food</h1>
      </div>
    </div>
  )
}

export default Main
