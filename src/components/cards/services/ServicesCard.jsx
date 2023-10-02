import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    width: 240,
    margin: 10,
    borderRadius: "20px !important",
    "&:hover": {
      cursor: "pointer",
    },
    boxShadow: "1px 1px 2px #6E6E6E !important",
  },
  container: {
    width: 240,
    textAlign: "center",
    height: 160,
  },
  textArea: {
    height: 50,
    textAlign: "center",
  },
});

const ServicesCard = (props) => {
  const classes = useStyles();

  const handleClickEvent = () => {
    if (props.searchQuery) {
      props.setSearchQuery({ ...props.searchQuery, searchType: props.value });
    } else props.handleClickFunction(props.value);
  };

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Card
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={handleClickEvent}
      className={classes.root}
      style={{
        background: hover ? props.hoverBackground : props?.background,
      }}
    >
      <CardActionArea className={classes.container}>
        <img
          src={hover ? props.hoverImage : props.image}
          alt="medical-service"
        />
      </CardActionArea>
      <CardContent className={classes.textArea}>
        <Typography
          variant="h6"
          component="h2"
          style={{ color: hover ? props.hoverColor : props.color }}
        >
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
