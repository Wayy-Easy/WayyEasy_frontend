import React from "react";
import { Paper, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

import useStyles from "./styles";

const Reviews = ({ ratings }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Reviews</h1>
      {ratings?.map((rat) => (
        <Paper className={classes.review}>
          <Typography variant="h4">{rat?.userName}</Typography>
          <Rating name="simple-controlled" value={rat?.average} />
          <Typography variant="body">{rat?.review}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default Reviews;
