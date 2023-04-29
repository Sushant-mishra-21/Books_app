import React, { useState } from "react";
import img1 from "../bg2.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData,setData]=useState([])
  const searchBook = (evt)=>{
    if(evt.key==="Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB4UkR4L16GEadfCvYGYbsT5q0kK_u98xE'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err));
    }
  }
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A Room Without Books is like <br /> a body Without a soul
          </h1>
        </div>
        <div className="row2">
          <h2>Find your Book </h2>
          <div className="search">
            <input
              type="text"
              name=""
              placeholder="Enter your Book Name"
              id=""
              value={search}
              onChange={(e)=>{
                setSearch(e.target.value)
              }}
              onKeyPress={searchBook}
            />

            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <img src={img1} alt="" srcset="" />
        </div>
      </div>
      <div className="container">
       {
        <Card book={bookData}/>
       }
      </div>
    </>
  );
};
export default Main;
