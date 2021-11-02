import React, { Fragment, useState } from "react";
import { AddCategory } from './components/AddCategory'


const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    'Attack On Titan',
    'Demon Slayer',
    'The Seven Deadly Sins'
  ]);

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
        { categories.map((category) => <li key={ category }>{ category }</li>) }
      </ol>
    </Fragment>
  )
}

export default GiftExpertApp;