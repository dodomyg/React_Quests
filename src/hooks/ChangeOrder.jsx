import { useEffect, useState } from "react";

const ChangeOrder = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [re,setRe] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("names")) {
      setData(JSON.parse(localStorage.getItem("names")));
    }
  }, []);
  return (
    <div className="my-5 mx-4">
      <input
        className="p-2 border border-black rounded-lg"
        type="text"
        value={name}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (name.trim() === "") {
              alert("Please enter a valid name");
              return;
            }
            if (data?.length > 0) {
              setData([...data, name]);
              localStorage.setItem("names", JSON.stringify([...data, name]));
            } else {
              setData([name]);
            }
            setName("");
          }
        }}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="m-2">
        <button onClick={()=>setRe(true)}>Re Arrange</button>
        {re && <button className="ml-3" onClick={()=>localStorage.setItem("names", JSON.stringify(data))}>Savee</button>}

        {data?.length > 0 &&
          data?.map((n, i) => (
            <div className="flex items-center justify-between my-3 py-2 px-1 w-50% bg-blue-gray-300 cursor-pointer" key={i}>
              <span className="text-lg">
                {i + 1} : {n}
              </span>
              {
                !re ?  <button onClick={()=>{
                const updated = data?.filter((name)=>name!==n);
                setData(updated);
                localStorage.setItem("names", JSON.stringify(updated));
              }}>
                Del
              </button>
              :
              <div className="flex items-center">
              {i>0 && <span onClick={()=>{
                const dummy = [...data]
                const temp = data[i-1];
                dummy[i-1] = dummy[i];
                dummy[i] = temp;
                setData(dummy);
              }} className="">⬆</span>}
              {i<data?.length-1 && <span onClick={()=>{
                const dummy = [...data]
                const temp = dummy[i+1];
                dummy[i+1] = dummy[i]
                dummy[i] = temp;
                setData(dummy);
              }} className="ml-2">⬇</span>}
              </div>
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChangeOrder;
