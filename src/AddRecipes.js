import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function AddRecipes({ recipes, setRecipes }) {
  const history=useHistory("");
  const [name, setName] = useState("");
  const [chef, setChef] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [picture, setPicture] = useState("");
  const [cooktimehours, setCooktimehours] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const addRecipe = () => {
    console.log("Adding Recipes", name, picture, cuisine, chef, cooktimehours, ingredients, preparation);
    const newRecipe = {
      name,
      chef,
      cuisine,
      picture,
      cooktimehours,
      ingredients,
      preparation,
    };
    console.log(newRecipe);
    setRecipes([...recipes, newRecipe]);
    history.push("/recipes");
  };
  return (
    <div className="add-recipes">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="standard-basic"
        label="Enter a name"
        variant="standard" />
      <TextField

        value={chef}
        onChange={(event) => setChef(event.target.value)}
        id="standard-basic"
        label="Enter a chef"
        variant="standard" />
      <TextField

        value={picture}
        onChange={(event) => setPicture(event.target.value)}
        id="standard-basic"
        label="Enter a picture url"
        variant="standard" />
      <TextField

        value={cuisine}
        onChange={(event) => setCuisine(event.target.value)}
        id="standard-basic"
        label="Enter a cuisine"
        variant="standard" />
      <TextField

        value={cooktimehours}
        onChange={(event) => setCooktimehours(event.target.value)}
        id="standard-basic"
        label="Enter a  cooktimehours"
        variant="standard" />
      <TextField

        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)}
        id="standard-basic"
        label="Enter a ingredients"
        variant="standard" />
      <TextField

        value={preparation}
        onChange={(event) => setPreparation(event.target.value)}
        id="standard-basic"
        label="Enter a Preparation method"
        variant="standard" />
      <Button onClick={addRecipe } variant="outlined">Add Recipe</Button>
     
    </div>
  );
}
