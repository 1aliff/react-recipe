import { makeStyles } from '@material-ui/styles'
import { Link, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      background : 'linear-gradient(to right, #fceabb, #F0A82B)'
    },
    button: {
      justifyContent : 'center'
    }
  });

const RecipeCards = ({ name , calories, image, url, recipes }) => {
    // material ui
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    // function to Capitalize Name for each spacing
    const capitallizedLetter = name => {
      const splitString = name.toLowerCase().split(' ');
      for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
      }
      return splitString.join(' ');
    }

    return (
        <Card className={classes.root}>
          <CardActionArea
            borderColor="primary.main"
          >
            <CardMedia
              component="img"
              height="200"
              image={image}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {capitallizedLetter(name)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`Calories : ${Math.round(calories)} kcal`}
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
              <CardActions style={{justifyContent : 'center' }}>
                <Button size="small" color="primary" target="_blank" href={url}>
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </CardActionArea>
      </Card>
    )
}

export default RecipeCards;