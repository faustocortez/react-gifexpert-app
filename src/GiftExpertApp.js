import React, { Fragment, useState } from "react";
import { getRandomAnime } from "./helpers";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    'Attack On Titan',
    'Demon Slayer',
    'The Seven Deadly Sins'
  ]);

  const handleAdd = () => {
    const name = getRandomAnime();
    
    if (categories.indexOf(name) === -1) {
      setCategories([...categories, name]);
    }
  };

  return (
    <Fragment>
      <h2>Gift Expert App</h2>
      <hr />

      <button
        onClick={handleAdd}
      >
        Agregar
      </button>

      <ol>
        { categories.map((category) => <li key={ category }>{ category }</li>) }
      </ol>
    </Fragment>
  )
}

export default GiftExpertApp;