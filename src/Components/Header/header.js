import "./header.css"
import ecom from "../../Images/website.jpg"
import {Link} from "react-router-dom"
const header = () => {
    return (
        <>
        <div className="header_cont">
            <div className="top_header_cont">
          <Link to="/home"> <img src={ecom} className="styling_ecom" alt="Wrong_url"/></Link> 
            <h1 className="heading_headder">E-Commerce </h1>
            </div>
            </div>
            
            
            </>              
     
    );
};

export default header;