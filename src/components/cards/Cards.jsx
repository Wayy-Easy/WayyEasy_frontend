import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia"; 
import Typography from "@mui/material/Typography";

import useStyles from "./styles.jsx";  

const Cards = (props) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      style={{ background: props.background, color: props.color }}  
    >
      <CardActionArea className={classes.media}>
        <img src={props?.image} alt="wayy-easy" />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {props?.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;