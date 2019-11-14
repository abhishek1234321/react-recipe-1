import React from 'react';

const Form = (props) => {
  const style = {
    marginBottom: '2rem'
  };

  return (
    <form onSubmit={props.getRecipe} style={style}>
      <input type="text" name="recipeName" className="form__input" />
      <button type="submit" className="form__button">Search</button>
    </form>
  );
}

export default Form;