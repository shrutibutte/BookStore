import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const BookSection = ({ data}) => {

  const [UpdatedPost,setUpdatePost] = useState({})

  const navigate =  useNavigate();
  const deletePost = (id) =>{
    axios.delete(`http://localhost:5000/api/b1/deleteBook/${id}`).then((res)=>{
      // console.log(res);
      // window.alert("Deleted Sucessfully")
    }).catch((err)=>{
      console.log(err);

      window.location.reload();
    })
  }

  const updatePost = (post)=>{
    // console.log(post)
    setUpdatePost(post)
    navigate('/update')
  }
  // console.log(item._id)
  return (
    <div>
      <div className="container">
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div className="col-md-2 col-sm-4 mb-4" key={index}>
                <div className="card h-100 shadow-lg" style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}>
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt="/"
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.bookname.slice(0, 15)}</h5>
                    <p className="card-text">Rs: {item.price}</p>
                    <p className="card-text">{item.description.slice(0, 20)}</p>
                    <Link to={`/update/${item._id}`}>
                      <button className="btn btn-secondary mr-4" onClick={()=>{ updatePost(item)}}>Update</button>
                    </Link>
                    <button className="btn btn-secondary " onClick={()=>{ deletePost(item._id)}} style={{marginLeft:"5px"}}>Delete</button>
                  </div>
                </div>



              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookSection;
