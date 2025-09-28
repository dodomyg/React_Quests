// import { useEffect, useState } from "react";
// import jsonData from "./data.json";

// const Deb = () => {
//   const customDebounce = (fnc, delay) => {
//     let t;

//     return function (...args) {
//       clearTimeout(t);
//       t = setTimeout(() => {
//         fnc(...args);
//       }, delay);
//     };
//   };
//   const [search, setSearch] = useState("");
//   const [selected, setSelected] = useState([]);

//   const filterData =
//     search.trim() !== "" &&
//     jsonData?.filter((i) => {
//       return i?.name.toLowerCase().includes(search?.toLowerCase());
//     });

//   useEffect(() => {
//     console.log(selected, "selected");
//   }, [selected]);

//   const handleSearch = (e) => {
//     setSearch(e);
//   };

//   const searchWithDebounce = customDebounce(handleSearch, 1500);

//   return (
//     <div className="m-3">
//       <h1>Debounce</h1>
//       <input
//         className="border border-black rounded-sm p-2 "
//         type="text"
//         value={search}
//         onChange={(e) => searchWithDebounce(e.target.value)}
//       />
//       <div className="flex flex-col w-[210px]">
//         {filterData?.length > 0 &&
//           filterData?.map((d) => (
//             <div
//               onClick={() => {
//                 setSelected((p) => [...p, d]);
//                 setSearch("");
//               }}
//               key={d?.id}
//               className={`cursor-pointer border border-gray-400 min-w-[150px] hover:bg-lime-800`}
//             >
//               <span>{d?.name}</span>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Deb;
