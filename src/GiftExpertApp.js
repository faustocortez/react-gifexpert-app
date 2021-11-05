import React, { Fragment, useState } from "react";
import { AddCategory } from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";


const GiftExpertApp = ({ defaultCategories = [] }) => {
  // const [categories, setCategories] = useState(['Attack On Titan']);0
  const [categories, setCategories] = useState(defaultCategories);
  
  // const handleAdd = (name) => {
  //   if (categories.indexOf(name) === -1) {
  //     setCategories([...categories, name]);
  //   }
  // };

  return (
    <Fragment>
      <h2>Gift Expert App</h2>
      <AddCategory setCategories={ setCategories }/>

      <hr />

      <ol>
        { categories.map((category) => (
          <GifGrid
            key={ category }
            category={ category }
          />
        )) }
      </ol>
    </Fragment>
  )
}

export default GiftExpertApp;