import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Components/Header/header"
import SideNav from "./Components/SideNav";
import Home from "./Components/Home"
import Product from "./Components/Product/product";
import Create from "./Components/Create/create";
import Context from "./Context.js";
import { useState } from "react";
import { useSelector } from 'react-redux';
const App = () => {
  let {cartItems}=useSelector((state)=>state.cart)
  let pro_data=cartItems
const [new_data,setnewData]=useState(pro_data)
const [filter_data,setFilter]=useState(pro_data)
return(
  <>
  
  
 <Context.Provider value={{new_data,setnewData,filter_data,setFilter}}>
  <BrowserRouter>
  <Header/>
   <SideNav/>
   <div className="background">
  <Routes >
   
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/create" element={<Create/>}/>
   
    <Route exact path="/product" element={<Product/>}/>
    
   </Routes>
   </div>
</BrowserRouter>
</Context.Provider>
</>


)
}    

export default App;