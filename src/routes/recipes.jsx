import RecipeCard from '../components/RecipeCard';
import './recipes.css';
const recipes = require('../data/recipes.json');

export default function Recipes() {
  return (
    <main id='recipes'>
      <h1>Recipes</h1>
      <p>
        All recipes are available on our{' '}
        <a className='inline-link' href='/get-involved'>
          social media
        </a>
        , so don't forget to follow us!
      </p>
      <div className='three-col-grid'>
        {recipes.map((recipe) => (
          <RecipeCard
            link={recipe.link}
            title={recipe.title}
            imgPath={recipe.imgPath}
          />
        ))}
      </div>
    </main>
  );
}
