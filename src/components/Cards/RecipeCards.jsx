import react from 'react'

import { makeStyles } from '@material-ui/styles'
import { Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const RecipeCards = ({ name , calories, image, url, recipes }) => {
    const classes = useStyles();

    // console.log('what is my recipes: ', recipes)

    // const recipesDisplay = recipes.join(', ')

    return (
        <Card className={classes.root}>
          <CardActionArea
            borderColor="primary.main"
          >
            <CardMedia
              component="img"
              height="230"
              image={image}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`Calories : ${Math.round(calories)}`}
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
                <i><u>Recipes </u></i>
                  <ul>
                    {
                      // need to clean this
                      recipes.map(r => 
                        <li key={r}> 
                          {r} 
                        </li>)
                    }
                  </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
      </Card>
    )
}

export default RecipeCards;