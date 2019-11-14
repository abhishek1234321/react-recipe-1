import React from 'react';
import { Link } from 'react-router-dom';

const F2F_API_KEY = 'aedbb2d845263a9cad4857bcec585195';

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;

    const apiUrl = `http://food2fork.com/api/search?key=${F2F_API_KEY}&q=${title}`;

    const req = await fetch(apiUrl);
    const res = await req.json();

    this.setState({
      activeRecipe: res.recipes[0]
    });

    console.log(this.state.activeRecipe);
  }

  render() {
    const recipe = this.state.activeRecipe;

    return ( 
      <div className="container">
        { this.state.activeRecipe.length > 0 && 
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__pubisher">
              Publisher: {recipe.publisher}
            </h4>
            <p className="active-recipe__website">
              <span><a href={recipe.publisher_url} target="_blank">{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Recipe;