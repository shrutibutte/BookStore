import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateBook = ({ UpdatedPost }) => {
  const { bookId } = useParams();
  const [getData, setGetData] = useState({});

  const [Data, setData] = useState({
    bookname: '',
    author: '',
    description: '',
    image: '',
    price: '',
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  console.log(Data);

  useEffect (()=>{
    const Submit = async (e) => {
      e.preventDefault();
      
      try {
        await axios.put(`http://localhost:5000/api/b1/updateBook/${bookId}`, Data);
        alert('Book updated successfully');
        // Redirect to a success page or any desired route
      } catch (error) {
        console.log(error);
        alert('Failed to update book');
      }
    };
    Submit();
  },[])
    
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/api/b1/getBook/${bookId}`);
  //       console.log("helloooo", response);
  //       setGetData(response.data.book);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, [bookId]);

  return (
    <div className="bg-dark" style={{ marginTop: "3rem" }}>
      {/* add book form */}
      <h2 className="text-white" style={{ alignItems: "center", textAlign: "center" }}>
        Update Book
      </h2>
      <div
        style={{
          justifyContent: 'center',
          width: "100%",
          display: "flex",
          marginTop: "20px"

        }}
      >

        <form style={{ width: "20rem" }} onSubmit >
          <div className="form-group mb-4" >
            <label className="mb-2 text-white" htmlFor="bookname">
              Book Name
            </label>
            <input
              onChange={change}
              value={Data.bookname}
              name="bookname"
              type="text"
              className="form-control"
              id="bookname"
              placeholder="Enter Book name"
            />
          </div>

          <div className="form-group mb-4">
            <label className="mb-2 text-white" htmlFor="author">
              Author Name 
            </label>
            <input
              onChange={change}
              value={Data.author}
              name="author"
              type="text"
              className="form-control"
              id="author"
              placeholder="Enter author name"
            />
          </div>

          <div className="form-group mb-4">
            <label className="mb-2 text-white" htmlFor="description">
              Description
            </label>
            <input
              onChange={change}
              value={Data.description}
              name="description"
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Description"
            />
          </div>

          <div className="form-group mb-4">
            <label className="mb-2 text-white" htmlFor="image">
              Image
            </label>
            <input
              onChange={change}
              value={Data.image}
              name="image"
              type="text"
              className="form-control"
              id="image"
              placeholder="Enter Image URL"
            />
          </div>

          <div className="form-group mb-4">
            <label className="mb-2 text-white" htmlFor="price">
              Price
            </label>
            <input
              onChange={change}
              value={Data.price}
              name="price"
              type="text"
              className="form-control"
              id="price"
              placeholder="Enter Price"
            />
          </div>


          <div className='ml-2' >
            <button type="submit" className="btn btn-success mt-3 mb-5 w-100 " style={{ width: "8rem" }} >
              Update Book
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
