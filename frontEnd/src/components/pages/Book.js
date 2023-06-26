import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BookSection from "../pages/bookSection"
const Book = () => {

  const [Data, setData] = useState()

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/b1/getBook");
        setData(response.data.book);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();

  })

  return (
    <div>
      <div className="bg-dark" style={{ minHeight: "91vh" }}>

        <div className="d-flex justify-context-center align-items-center py-3 my-3">
          <h4 class="text-white">Book Section</h4>
        </div>

        {Data ? (
          <BookSection data={Data} />
        ) : (
          <div className='text-white'>
            error loading
          </div>
        )
        }


      </div>
    </div>


// {/* 
//         <div class="container">
//           <div class="row" >

//             <div class="col-md-3">
//               <div class="card" style={{ marginBottom: "1rem" }}>
//                 <div class="card" >
//                   <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU" alt="Card image cap" />
//                   <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <button href="#" class="btn btn-secondary m-2">Update</button>
//                     <button href="#" class="btn btn-secondary">Delete</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           <div />
//         <div /> 
// */}

 




  )
}

export default Book;