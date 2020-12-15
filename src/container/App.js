import { useState, useEffect } from 'react';
import './App.css';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Input, Button, CircularProgress } from '@material-ui/core'

//react-zoom
import Zoom from 'react-reveal/Zoom';

// components
import Cards from '../components/Cards/RecipeCards'

const APP_KEY = process.env.REACT_APP_KEY
const APP_ID = process.env.REACT_APP_ID

// console.log('my app_id: ',process.env.REACT_APP_ID);
// console.log('my app_key:',process.env.REACT_APP_KEY);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
      textIndent: '10px'
    },
  },
  container: {
    flexGrow: 1
  }
}));

const App = () => {
  // material ui usage
  const classes = useStyles();
  
  // hooks 
  const [params, setParams] = useState('nasi+goreng'); // Initial parameters
  const [recipesArray, setrecipesArray] = useState([]); // Get array of recipesArray
  const [query, setQuery] = useState(''); // Array for useEffect() to use - avoid re render

  // mounted
  useEffect(() => {
      getRecipesArray();
      console.log('mounted')
  }, [query])

  // form's handler
  const handleSearch = e => {
    setParams(e.target.value)
    // console.log('what is my target val', e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('clicked')
    setQuery(e.target.value);
  }


  // pls work
  const getRecipesArray = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${params}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json()
    
    setrecipesArray(data.hits)
  }

  return (
    <div className="App">
      <h1 className="header">Tasty recipes.</h1>

      <form autoComplete="off" onSubmit={handleSubmit} className={classes.root}>
            <Input
              className="inputBox"
              type="text"
              placeholder="Nasi Goreng.."
              inputProps={{ 'aria-label': 'description' }}
              onChange={handleSearch}
            />
            <Button
              type="submit"
              className="inputButton"
              variant="contained" 
              color="secondary" 
            >
              Search
            </Button>
      </form>

      <br />

      {
        recipesArray.length === 0 ? 
          <CircularProgress color="secondary"/> : // loader
            recipesArray.map((recipe) => (
              <Zoom top>
                <Grid
                  container
                  className={classes.container}
                  spacing={4}
                  >
                  <Grid item xs={12} spacing={3}>
                    <Grid container justify="center">
                      <Cards
                        key={recipe.recipe.label}
                        name={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        url={recipe.recipe.url}
                        recipes={recipe.recipe.ingredientLines}
                        />
                      </Grid>
                    </Grid>
                </Grid>
              </Zoom>
            ))
      }
    </div>
  )
}

export default App;
