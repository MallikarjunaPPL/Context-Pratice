import React from 'react';
import "./create.css"
// import {Link} from "react-router-dom"
import upload from "../../Images/upload.jpg"
import { useContext,useState } from 'react';
import { v4 as uuidv4 } from "uuid";
// import { useSelector } from 'react-redux';
import Context from "../../Context"
const Create = () => {
    const [Size, setSize] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const [Color, setColor] = useState("");
    const [errorMessageColor, setErrorMessageColor] = useState(false);

    
    const [inpVal,setVal]=useState({
        nameSear:"",
        priSear:"",

    })
   
    const {new_data,setnewData}=useContext(Context)
    console.log("new_dtaa.........",new_data)
    const [image,setImage]=useState(null)
    // const [create,setCreate]=useState([])
  
    // let {cartItems}=useSelector((state)=>state.cart)
    // const new_cartItems=[...create,...cartItems]
    //  console.log("newCart............",new_cartItems)
    const onChange=e=>{
        setVal({...inpVal,nameSear:e.target.value})
    }
    const onChangePrice=e=>{
        setVal({...inpVal,priSear:e.target.value})
    }
    const onChangecolor=e=>{
        const colorval=e.target.value
        
        const ColorArr=["red","yellow","orange","chartreuse","RED","YELLOW","ORANGE","CHARTREUSE",","]
        const colorCheck=ColorArr.includes(colorval)
        console.log(colorCheck)
        if (colorCheck && (colorval.length>0)){
            setColor(colorval);
            setErrorMessageColor(false);
        }else{
            setColor("");
            setErrorMessageColor(true);
        }
    }
    const onChangesize=e=>{
        const value=e.target.value
        const regex = /^(s|m|l|xl|xxl)$/i;
        if (regex.test(value)) {
          setSize(value);
          setErrorMessage(false);
        } else {
          setSize("");
          setErrorMessage(true);
        }
      };
    
    const submit=event=>{
        event.preventDefault()
    }
    const addImage=event=>{
        
            if (event.target.files && event.target.files[0]) {
              setImage(URL.createObjectURL(event.target.files[0]));
            }
           
           
    }
    const addData=()=>{
        const add={
            id:uuidv4(),
            category:inpVal.nameSear,
            price:inpVal.priSear,
            size:Size,
            color:Color,
            src:image
        }
        // setCreate((prev)=>[...prev,add])
       setVal({inpVal,nameSear:"",priSear:""})
       
        setImage(null)
        setnewData((prev)=>[...prev,add])
       
        
    }
    // console.log("create............",create)
        return (

        <form onSubmit={submit}>
            <div className='inp_cont'>
            <div>
            <label className='para_product'>Product Name:--</label>
            <input required className='btn_created' type="text" onChange={onChange} value={inpVal.nameSear} /></div>
            <div className='input_cont'>
               
            <label className='para_product'>Price Range :--</label>
            <input required className='btn_created' type="number" onChange={onChangePrice} value={inpVal.priSear} /></div>
            <div className='input_cont'>
               
            <label className='para_product'>Req Color :--</label>
            <input  className='btn_created' type="text" onChange={onChangecolor}  />
            {errorMessageColor && <p className='paraGraph'>Please Enter Color Like 'red','yellow','orange','chartreuse'</p>} </div>
            <div>
            <label className='para_product'>Req Size :--</label>
            <input  className='btn_created' type="text" onChange={onChangesize}  />
            {errorMessage && <p className='paraGraph'>"Please enter a valid size (S,M,L,XL,XXL)"</p>}</div>
            <div className='img_cont'>
            <p className=' upload_para para_product'>Upload Image</p>
            <img src={upload} className="upload_sty" alt="Wrong_url"/>
            <input className='upload_data' onChange={addImage} type="file"/></div>
            <div className="btn_align">
            <button onClick={addData} className='btn_create'>Add Cart</button>
        
           </div>
        </div>
        
            
        </form>
    );
};

export default Create;