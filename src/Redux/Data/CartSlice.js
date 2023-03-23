import { createSlice } from "@reduxjs/toolkit";
import src1 from "../../Images/image-1.webp";
import src2 from "../../Images/image-2.jpeg";
import src3 from "../../Images/image-3.webp";
import src4 from "../../Images/image-4.jpeg";
import src5 from "../../Images/image-5.jpeg";
import src6 from "../../Images/image-6.webp";
import src7 from "../../Images/image-7.webp";
import src8 from "../../Images/image-8.jpeg";
import src9 from "../../Images/image-9.jpeg";
import src10 from "../../Images/image-10.jpeg";
import src11 from "../../Images/image-11.jpeg";
import src12 from "../../Images/image-12.webp";
import src13 from "../../Images/image-13.webp";
import src14 from "../../Images/image-14.jpeg";
import src15 from "../../Images/image-15.jpeg";
import src16 from "../../Images/image-16.webp";
const cartItems=[
    {
        id:1,
        src:src1,
        category:"Cropped Stay Grovyy",
        color:"red",
        price:"$10",
        size:"S"
    },
    {
        id:2,
        src:src2,
        category:"Tappered stay Grovyy off",
        color:"yellow",
        price:"$20",
        size:"S"
    },
    {
        id:3,
        src:src3,
        category:"Knee cut stay Grovyy off",
        color:"yellow",
        price:"$30",
        size:"M"
    },
    {
        id:4,
        src:src4,
        category:"Slim Fit stay Grovyy off",
        color:"orange",
        price:"$20",
        size:"L"
    },
    {
        id:5,
        src:src5,
        category:"Distressed stay Grovyy off",
        color:"chartreuse",
        price:"$10",
        size:"XXL"
    },
    {
        id:6,
        src:src6,
        category:"Clean stay Grovyy off",
        color:"chartreuse",
        price:"$90",
        size:"XXL"
    },
    {
        id:7,
        src:src7,
        category:"Mid Waist stay Grovyy off",
        color:"orange",
        price:"$80",
        size:"L"
    },
    {
        id:8,
        src:src8,
        category:"Slim Fit Grovyy off",
        color:"red",
        price:"$70",
        size:"XL"
    },
    {
        id:9,
        src:src9,
        category:"Cropped stay Grovyy off",
        color:"red",
        price:"$60",
        size:"S"
    },
    {
        id:10,
        src:src10,
        category:"Mid Waist Grovyy off",
        color:"yellow",
        price:"$50",
        size:"M"
    },
    {
        id:11,
        src:src11,
        category:"Cropped stay Grovyy off",
        color:"orange",
        price:"$40",
        size:"M"
    },
    {
        id:12,
        src:src12,
        category:"Cropped stay Grovyy off",
        color:"red",
        price:"$30",
        size:"XXL"
    },
    {
        id:13,
        src:src13,
        category:"Clean stay Grovyy off",
        color:"yellow",
        price:"$20",
        size:"L"
    },
    {
        id:14,
        src:src14,
        category:"Knee cut stay Grovyy off",
        color:"chartreuse",
        price:"$10",
        size:"M"
    },
    {
        id:15,
        src:src15,
        category:"Tappered stay Grovyy off",
        color:"orange",
        price:"$20",
        size:"L"
    },
    {
        id:16,
        src:src16,
        category:"Tappered stay Grovyy off",
        color:"red",
        price:"$25",
        size:"XL"
    }


]


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:cartItems,
       
     
    }
    

    
    
})

console.log(cartSlice)
export default cartSlice.reducer