import React from 'react';
import { useContext,useState } from 'react';
import "./product.css";

import { useSelector } from 'react-redux';

import Context from "../../Context"
import Sidenav from '../SideNav';

const Product = () => {
   const {new_data,filter_data}=useContext(Context)
   const [Color, setColor] = useState("");
   const [ImageIndex, setImageIndex] = useState(null);
//    const [btnclick,setClick]=useState(false);
   const [sizes,setSizes]=useState("")
   const [SizeIndex,setSizeIndex]=useState(null)
  const ColorChange = (color,index) => {
    setColor(color);
    // setClick(true);
    setImageIndex(index)
    // setWhite("white")
  };

  const SizeCheck=(si,index)=>{
    setSizes(si)
    setSizeIndex(index)
  }



  console.log("...filterdata",filter_data)
  console.log("...new_data",new_data)
   
   let {cartItems}=useSelector((state)=>state.cart)
  
   
 console.log("cartItem",cartItems)
//    const [btn,setbtn]=useState(false)
 
  
//    const filterData=cartItems.filter((item)=>
//    item.size.toLowerCase().includes(search)||
//     item.color.toLowerCase().includes(search)||
//    item.price.toLowerCase().includes(search)
//   )
 
  
   
   const searchbasefilter=()=>{
 
     return(
        <>
        
         {filter_data.map((item,index)=>(
            
             <ul className='cart_cont' key={item.id}>
               <div  >
              <div style={{backgroundColor:ImageIndex===index?Color:'transparent'}}  className= "image_color_cont"> 
               <img src={item.src} className="image_container" alt="Wrong_URl"/></div>
                 <div className='li_cont'>
                <li className='li'>{item.category}</li>
                <div className='color_cont'>
                    <button onClick={() => ColorChange("red",index)} className='red_color_backgrnd'></button>
                    <button onClick={() => ColorChange("yellow",index)} className='yellow_color_backgrnd'></button>
                    <button onClick={() => ColorChange("orange",index)} className='orange_color_backgrnd'></button>
                    <button onClick={() => ColorChange("chartreuse",index)} className='black_color_backgrnd'></button>
                </div>
                <li className='li'>Price-{item.price}</li>
                <li className='li'>Available Color:-{item.color}</li>
                <li className='li li_margin'>Available Sizes:-{item.size}</li>
               {SizeIndex===index?sizes===item.size?<p className='paraGraph'>Add To Cart</p>:<p className='paraGraph'>Not Available</p>:''}
                
                <div className='size_cont'>
                        <button onClick={()=> SizeCheck("S",index)} className="p">S</button>
                        <button onClick={()=> SizeCheck("M",index)} className="p">M</button>
                        <button onClick={()=> SizeCheck("L",index)} className="p">L</button>
                        <button onClick={()=> SizeCheck("XL",index)} className="p">XL</button>
                        <button onClick={()=> SizeCheck("XXL",index)} className="p">XXL</button>
                </div>
             
                </div>
                 </div>
            </ul>
             
        ))}
    </>
    )
}
  
const ActualData=()=>{
    // console.log("filterdata",filterData)
    return(
        <>
       
    
        {new_data.map((item,index)=>(
            
             <ul className='cart_cont' key={item.id}>
                <div>
                <div style={{backgroundColor:ImageIndex===index?Color:'transparent'}}  className= "image_color_cont"> 
                <img src={item.src} className="image_container" alt="Wrong_URl"/></div>
                 <div className='li_cont'>
                <li className='li'>{item.category}</li>
                <div className='color_cont'>
                    <button onClick={() => ColorChange("red",index)} className='red_color_backgrnd'></button>
                    <button onClick={() => ColorChange("yellow",index)} className='yellow_color_backgrnd'></button>
                    <button onClick={() => ColorChange("orange",index)} className='orange_color_backgrnd'></button>
                    <button onClick={() => ColorChange("chartreuse",index)} className='black_color_backgrnd'></button>
                </div>
                <li className='li'>Price-{item.price}</li>
                <li className='li'>Available Color:-{item.color}</li>
                <li className='li li_margin'>Available Size:-{item.size}</li>
                {SizeIndex===index?sizes===item.size?<p className='paraGraph'>Add To Cart</p>:<p className='paraGraph'>Not Available</p>:''}
                
                <div className='size_cont'>
                        <button onClick={()=> SizeCheck("S",index)} className="p">S</button>
                        <button onClick={()=> SizeCheck("M",index)} className="p">M</button>
                        <button onClick={()=> SizeCheck("L",index)} className="p">L</button>
                        <button onClick={()=> SizeCheck("XL",index)} className="p">XL</button>
                        <button onClick={()=> SizeCheck("XXL",index)} className="p">XXL</button>
                </div>
             
             </div>
                </div>
            </ul>
            
        ))}

    </>
    )
}
    return (

        <div className='product_cont'>
            
           <div className='main_card'>
           
            {filter_data.length===0?ActualData():searchbasefilter()}
            
           </div>
           
        </div>
    );
};


export default Product;