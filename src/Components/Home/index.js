import React from 'react';
import "./index.css";
import {Link} from "react-router-dom"

const Index = () => {
   
    return (
        <div  >
            <div className="btn_cont">
            <Link to="/create" > <button className="btn_styling">Create Products</button></Link>
            <Link to="/product" ><button className="btn_styling">List Products</button> </Link>
            </div>
        </div>
    );
};

export default Index;