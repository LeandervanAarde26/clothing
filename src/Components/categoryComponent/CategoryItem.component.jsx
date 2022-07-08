import React from 'react';
import './categoryitem.styles.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const CategoryItem = ({ category }) => {
  const {id, imageUrl, title, Root } = category;
  const navigate = useNavigate();

  const navHandler = () => {
    console.log(Root)
  }
  return (
    <div className="category-container" onClick={navHandler} >
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
     <Link to={`shop/${title}`}>
     <div className="category-body-container">
        <h2>{title}</h2>
        <p >Shop Now</p>
      </div>
     </Link>
    </div>
  );
};

export default CategoryItem;