import React, { Suspense, useContext, useEffect } from "react";
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
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import MyCart from "./hooks/MyCart";
import MultiSelect from "./hooks/MultiSelect";
import ProgressComponent from "./hooks/ProgressComponent";
import ThemePage from "./hooks/ThemePage";
import { SwitchContext } from "./context/SwitchContext";
import Quiz from "./hooks/Quiz";
import Main from "./hooks/BreadCrumbs/Main";
import ProductPage from "./hooks/BreadCrumbs/ProductPage";
import SingleProduct from "./hooks/BreadCrumbs/SingleProduct";
import BreadCrumbs from "./hooks/BreadCrumbs";
import CurrencyConverter from "./hooks/CurrencyConverter";
import OTP from "./hooks/OTP";
import UseMemo from "./hooks/UseMemo";
import UseCallBack from "./hooks/UseCallBack";
import UseRefx from "./hooks/UseRefx";
import Accordation from "./hooks/Accordation";
const LazyLoadingComponent = React.lazy(() =>
  import("../src/hooks/LazyLoading")
);

const App = () => {
  // const { data , loading , error} = useApiCall('https://jsonplaceholder.typicode.com/posts')

  const { theme, toggleTheme } = useContext(SwitchContext);

  const location = useLocation();

  useEffect(() => {
    document.querySelector(".parent").classList.remove("light", "dark");
    document.querySelector(".parent").classList.add(theme);
  }, [theme]);

  return (
    <div
      className={`parent w-full h-full ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <button className="text-3xl fixed top-5 right-5" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
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
      {/* <Routes>
      
        <Route path="/" element={<Cart />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes> */}
      {/* <MultiSelect /> */}
      {/* <ProgressComponent /> */}
      {/* <ThemePage /> */}

      {/* <Quiz /> */}
      {/* <BreadCrumbs/> */}
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>  */}

      {/* <CurrencyConverter /> */}
      {/* <OTP /> */}
      {/* <UseMemo/> */}
      {/* <UseCallBack /> */}
      {/* <UseRefx /> */}
      <Accordation/>
    </div>
  );
};

export default App;
