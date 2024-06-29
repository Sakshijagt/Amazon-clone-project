import React, { useEffect, useState } from "react";
import "./RightSide.css";
import Rating from '@mui/material/Rating';
import Product from "./Product";
import { Link } from 'react-router-dom';

function RightSidePanel(props){

    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{
        //api call
        let list =[
            { id: 123456543, name : "Iphone10", rating: "34565", price: "4534",image:"https://ik.imagekit.io/amazon9696/amazon-image/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1719572159730"},
                { id: 54342265, name : "Iphone11", rating: "656", price:"76543456",image:"https://ik.imagekit.io/amazon9696/amazon-image/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1719572161189"},
                    { id: 123453456543, name : "Iphone12", rating: "8754", price:"76543",image:"https://ik.imagekit.io/amazon9696/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1719572160780"},
                        { id: 12344545456543, name : "Iphone13", rating: "344574367565", price:"637357",image:"https://ik.imagekit.io/amazon9696/amazon-image/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1719572158994"},
                        { id: 123465656543, name : "Iphone12", rating: "8754", price:"76543",image:"https://ik.imagekit.io/amazon9696/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1719572160780"},
                        { id: 2356346363, name : "Iphone13", rating: "344574367565", price:"637357",image:"https://ik.imagekit.io/amazon9696/amazon-image/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1719572158994"},
        ]
        setListOfProducts(list);
    },[]);
    
    
    
    
    
       return(
        <div className="RightSide_main">
          {/*  <Product rating="234444" price="21342" name="iphone 11" image="https://ik.imagekit.io/amazon9696/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1719572160780"/>
            <Product/>
            <Product/>
            <Product/>
            <Product/> */}

            {
                    listOfProduct.map ( (item) =>(
                        <Link to={`/order/`+item.id }>
                            <Product definition={item} />
                        </Link>
                    ))
        }
        </div>
    );
}
export default RightSidePanel;