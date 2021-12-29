// import logo from './logo.svg';
import './App.css';
import { Recipes } from './Recipes';
import  { useState } from 'react';
import { AddRecipes } from './AddRecipes';
import{Switch,Route,useHistory} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';  
import { Button } from '@mui/material';

import { Home } from './Home';
function App() {
  const INITIAL_RECIPES=[
    {
name:"Paradise Biryani",
chef:" From Ali Hemati",
cuisine:"Hyderabadi Cuisine",
picture:"https://paradise-biryani.s3.ap-south-1.amazonaws.com/Biryani.jpg",
cooktimehours:"2Hours",
ingredients:"Required:1 Kg meat,1 tbsp salt,1 tbsp ginger garlic paste,1 tbsp red chilli paste,1 tbsp green chilli paste ,(sauteed brown onions to taste)1/2 tbsp cardamom powder,3-4 Cinnamon sticks,1 tbsp cumin seeds,4 ClovesA pinch of maceto taste mint leaves,2 tbsp lemon juice,250 gms curd,4 tbsp clarified butter,750 gms semi cooked rice,1 tsp saffron,1/2 cup water,1/2 cup oilGarnish ingredients:Eggs, boiledCarrots, slicedCucumbers",
preparation:"Making:This biryani is cooked by dum style where the chicken and rice are let to cook together by placing an airtight lid to the vessel. This is one of the easiest recipe ever. Instead of using fried onions, I microwaved the onions for 20-30 minutes until they caramelized. This saves a lot of calories and oil.",
  },
  {
    name:"Paneer Butter Masala",
    chef:"From Jay shetty",
    cuisine:"North-Indian Cuisine",
    picture:"https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x500.jpg",
    cooktimehours:"1Hours",
    ingredients:"Required:Ripe red juicy tomatoes,Cashews,cream,butter,paneer,spice&herbs,tofu,vegan butter or oil,coconut cream",
    preparation:"Making:First of all, heat 3 tablespoons butter with 1 teaspoon oil in a Kadai,After doing that, add cloves, red chillies, bay leaves, cinnamon, and half of the crushed coriander seeds Once you did that, saute it for 30 seconds The next step is, add onion and stir-fry for half a minute and add garlic paste and ginger paste, After adding them, cook it for more half a minute, Now add tomatoes, coriander powder, and red chilli,Cook it on high heat till oil leaves the masala and puree the mixture Now, heat the remaining butter in a no-stick pan, cook the pureed mixture for 2 minutes. Now add paneer pieces and salt into in it. Add a ½ cup of water and cook it on low heat for the next five minutes. At last, sprinkle kasoori methi and mix it lightly. After doing that, turn off your device and mix in the cream and serve hot by garnishing with coriander spring in front of your family members of friends.",
      },
      {
        name:"Crispy Clamari Rings",
        chef:"From Herald Steve",
        cuisine:"Continental Cuisine",
        picture:"https://cdn.kuali.com/wp-content/uploads/2019/06/24145359/sl19_fb_jun03.jpg",
        cooktimehours:"1hours",
        ingredients:"Required:110 Squid rings60 Tempura batter1 Lemon (half)1 Parsley sprig20 Thai chilli sauce20 Refined flour5 Garlic confit",
        preparation:"Making:Dust the squid rings with refined flour.2.Dip in the tempura batter and deep fry it till golden in colour.3.Served with lemon half, garlic confit, Thai chilli sauce and parsley sprig.",
          },
          {
            name:"Curry Udon",
            chef:" From Haruto",
            cuisine:"Japanese Cuisine",
            picture:"https://v1.nitrocdn.com/KQYMGOLIdXGmoAcyJsPOrQDKktgCbwtG/assets/static/optimized/rev-164325c/wp-content/uploads/2020/03/Curry-Udon-2018-I.jpg",
            cooktimehours:"0.5hours",
            ingredients:"Required:Sour Cream,Udon noodles,Chuno sauce,soy sauce,mirin,dashi,curry powfer,vegetable paste",
            preparation:"Making:Sub the pork with chicken, beef, shrimp, tempeh, or any protein you have on hand really. For extra fiber, feel free to throw in some greens.",
              },
              {
                name:"Alfredo",
                chef:"From Alessandro",
                cuisine:"Italian Cuisine",
                picture:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg",
                cooktimehours:"1Hours",
                ingredients:"Required:¼ cup butter,1 cup heavy cream, 1 clove garlic, crushed, 1 ½ cups freshly grated Parmesan cheese, ¼ cup chopped fresh parsley",
                preparation:"Making:Melt butter in a medium saucepan over medium low heat. Add cream and simmer for 5 minutes, then add garlic and cheese and whisk quickly, heating through. Stir in parsley and serve"

                  },
                  {
                    name:"Creamy Salmon",
                    chef:" From Thomas Erwin",
                    cuisine:"European Cuisine",
                    picture:"https://i.pinimg.com/originals/c1/4a/86/c14a86b69d01fd2b8c09abb1c77d4be9.jpg",
                    cooktimehours:"2Hours",
                    ingredients:"Required:250g baby potatoes , thickly sliced 2 tbsp olive oil 1 leek , halved, washed and sliced 1 garlic clove , crushed 70ml double cream 1 tbsp capers , plus extra to serve1 tbsp chives , plus extr 2 skinless salmon    mixed rocket salad , to serve (optional)",
                    preparation:" Making:Heat the oven to 200C/180C fan/gas 6. Bring a medium pan of water to the boil. Add the potatoes and cook for 8 mins. Drain and leave to steam-dry in a colander for a few minutes. Toss the potatoes with ½ of the oil and plenty of seasoning in a baking tray. ",
                      },
                 ];
                 const [recipes,setRecipes]=useState(INITIAL_RECIPES); 
                 const history=useHistory("");
        return (
       <div className="App">
       <AppBar position="static">
  <Toolbar variant="dense" >
   
  <Button onClick={()=>history.push("/recipes")} variant="text" color="inherit">RECIPES</Button>
  <Button onClick={()=>history.push("/add-recipes")} variant="text" color="inherit">ADD RECIPES</Button>
  </Toolbar>
</AppBar>
      
       <Switch>
       <Route  exact path="/">
       <Home/>
       </Route>
       <Route path="/recipes">
       {recipes.map((rcp)=>(<Recipes name={rcp.name} picture={rcp.picture}chef={rcp.chef}cuisine={rcp.cuisine}cooktimehours={rcp.cooktimehours}ingredients={rcp.ingredients}preparation={rcp.preparation} /> ))}
       </Route>
       <Route path="/add-recipes">
       <AddRecipes recipes={recipes} setRecipes={setRecipes}/>
       </Route>
    
       </Switch>
      </div>
  );
        }

export default App;
