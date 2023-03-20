import {useContext, useState} from "react";

import { Link } from "react-router-dom";
import "./index.css";
import  Context  from "../../Context";

const Sidenav=()=>{
const {setFilter,new_data}=useContext(Context)

const [button,setbutton]=useState(false)
const [search,setSearch]=useState("")

const changebutton=()=>{
   
    setbutton(true)
   
}
const chnageback=()=>{
    setbutton(false)
}
const changeSearch=event=>{
    setSearch(event.target.value)
   

}
const homepage=()=>{
    setbutton(false)
}

const changeXS=()=>{
    const filterData=new_data.filter((item)=>item.size==="XS")
    setFilter(filterData)

}

const changeS=()=>{
    const filterData=new_data.filter((item)=>item.size==="S")
    setFilter(filterData)
}
const changeM=()=>{
    const filterData=new_data.filter((item)=>item.size==="M")
    setFilter(filterData)
}
const changeL=()=>{
    const filterData=new_data.filter((item)=>item.size==="L")
    setFilter(filterData)
}
const changeXL=()=>{
    const filterData=new_data.filter((item)=>item.size==="XL")
    setFilter(filterData)
}
const changeXXL=()=>{
    const filterData=new_data.filter((item)=>item.size==="XXL")
    setFilter(filterData)
}
const changeXXXL=()=>{
    const filterData=new_data.filter((item)=>item.size==="XXXL")
    setFilter(filterData)
}

const changeAll=()=>{

    setFilter(new_data)
 }
 const filterSearch=()=>{
    const searchfilterData=new_data.filter((item)=>
   item.size.toLowerCase().includes(search)||
      item.color.toLowerCase().includes(search)||
    item.price.toLowerCase().includes(search)
   )
  
    setFilter(searchfilterData)
 }

 





const CreateSideNav = () => {
    return (
        <div className="side_cont create_button "> 
             <Link to="/home"> <button className=' btn_create'>Home:-</button></Link>
             <Link to="/product"> <button onClick={changebutton} className='btn_create'>List of Products:-</button></Link>
        </div>
    );
};

 const ProductSidenav=()=>{
    return(
        <div id="sidenav" className="side_cont">
        <h1>Sizes:--</h1>
                <div className="side_container">
                <div className='size_cont'>
                     <button onClick={changeXS} className="btn_bt" >XS</button> 
                </div>
                <div className='size_cont'>
                <button onClick={changeS} className="btn_bt">S</button>
                </div>
                <div className='size_cont'>
                <button onClick={changeM} className="btn_bt" >M</button>
                </div>
                <div className='size_cont'>
                <button onClick={changeL} className="btn_bt" >L</button>
                </div>
                <div className='size_cont'>
                <button onClick={changeXL} className="btn_bt" >XL</button>
                </div>
                <div className='size_cont'>
                <button onClick={changeXXL} className="btn_bt" >XXL</button>
                </div>
                <div className='size_cont'>
                <button onClick={changeXXXL} className="btn_bt" >XXXL</button>
                </div>
                <div className='size_cont'>
                <button onClick={changeAll}  className="btn_bt" >All</button>
                </div>
                </div>
                <input placeholder="search"  onClick={filterSearch} onChange={changeSearch} value={search}  className='btn_create' type="search"/>
                <Link to="/create" > <button onClick={chnageback} className='btn_create'>Back</button></Link>
                <Link to="/home" >  <button onClick={homepage} className='btn_create'>Home</button></Link>
            </div>
    )
 }

    return(
        <div>
        {button?ProductSidenav():CreateSideNav()}
        </div>
    )
 }
 export default Sidenav;