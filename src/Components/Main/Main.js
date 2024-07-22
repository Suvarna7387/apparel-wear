import React, { useState } from "react";
import "../Main/Main.css";
import productData from "./Data";

const Main = () => {
  const currentPath = window.location.pathname;
  const [clickedIndex, setClickedIndex] = useState(null);

  // Function to handle click on image
  const handleImageClick = (index) => {
    setClickedIndex(index);
  };


  // Dynamically set the data state based on the current path
  const [data, setData] = useState(() => {
    if (currentPath === "/") {
      return productData[0]; // Wedding Collections
    } else if (currentPath === "/sarees") {
      return productData[0]; // Sarees
    } else if (currentPath === "/topsandjeans") {
      return productData[1]; // Tops and Jeans
    } else if (currentPath === "/blouse") {
      return productData[2]; // Blouse and lingerie wear
    }
    else if (currentPath === "/western") {
      return productData[3]; // Blouse and lingerie wear
    }
    else if (currentPath === "/kurti") {
      return productData[4]; // Blouse and lingerie wear
    } else {
      return null; // Handle other paths or invalid paths
    }
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Get the current page of ImageList data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Object.values(data.ImageList).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container-main-first">
        <div className="main-info-firstchild">
          <div className="main-Heading">{data.name}</div>
          <div className="main-information">{data.description}</div>
        </div>
        <div className="main-info-secondchild">
          <img className="toponeimg" src={currentItems[0]?.image} alt="Top One" />
        </div>
      </div>
      <div className="container-main-second">
        {currentItems.map((imageData, index) => (
          <div key={index} className={`product-card ${index === clickedIndex ? 'clicked' : ''}`}
          onClick={() => handleImageClick(index)}>
            <img
              className="product-image"
              src={imageData.image}
              // alt={imageData.description}
            />
            {/* <div className="product-details">
              <div className="product-description">
                {imageData.description}
              </div>
              <div className="product-price">{imageData.price}</div>
            </div> */}
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div style={{color:"white",display:"flex",justifyContent:"center",alignItems:"center" , backgroundColor:"#000"}} className="pagination">
        {[...Array(Math.ceil(Object.values(data.ImageList).length / itemsPerPage)).keys()].map((number) => (
          <button key={number} onClick={() => paginate(number + 1)} className="page-link">
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Main;
