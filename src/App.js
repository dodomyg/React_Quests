import React, { Suspense } from "react";
import Ref from "./hooks/Ref";
import HigherOrder from "./hooks/HigherOrder";
import useApiCall from "./hooks/useApiCall";
import Calculator from "./hooks/Calculator";
import OptionalDropDown from "./hooks/OptionalDropDown";
import DropDownTwo from "./hooks/DropDownTwo";
import Pagination from "./hooks/Pagination";
import EmployeeDb from "./hooks/EmployeeDb";
import EMI from "./hooks/EMI";
import PasswordGenerator from "./hooks/PasswordGenerator";
import Cart from "./hooks/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyCart from "./hooks/MyCart";

const LazyLoadingComponent = React.lazy(() =>
  import("../src/hooks/LazyLoading")
);

const App = () => {
  // const { data , loading , error} = useApiCall('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      {/* <UseEffect /> */}
      {/* <ExampleComponent /> */}
      {/* <Ref /> */}
      {/* <HigherOrder /> */}
      {/* {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && data.map((post,i) => <div key={i} style={{margin:"20px 0"}}>{i+1} : {post.title}</div>)} */}

      {/* <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadingComponent />
        </Suspense> */}
      {/* <Calculator/> */}
      {/* <OptionalDropDown/> */}
      {/* <DropDownTwo/> */}
      {/* <Pagination/> */}
      {/* <EmployeeDb/> */}
      {/* <EMI/> */}
      {/* <PasswordGenerator /> */}
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </div>
  );
};

export default App;
