import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
    
      {categories.map((categorie, index) => {
        return <button type="button" key={index} className="filter-btn" onClick={() => filterItems(categorie)}>
        {categorie}
      </button>
      } )}
    </div>
  );
};

export default Categories;
