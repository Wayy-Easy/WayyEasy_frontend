import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteHospital } from "../../../redux/actions/admin/hospitalAdmin/hospital";
import useStyles from "./styles";

const Hospital = ({ hospital }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const removeHospital = (id) => {
    dispatch(deleteHospital(id));
  };

  const editHospital = (id) => {
    history.push({
      pathname: `/admin/hospital/managehospital/${id}`,
      state: hospital._id,
    });
  };

  return (
    <>
      <Card className={classes.singleCard}>
        <CardContent>
          <Typography className={classes.typos} variant="h4" color="text.secondary">
            {hospital?.name}
          </Typography>
          <Typography className={classes.typos}
            variant="h6"
            color="text.secondary"
          >
            {hospital?.address}
          </Typography>
          <Typography className={classes.typos}
            variant="body"
            color="text.secondary"
          >
            {hospital?.contactNumber}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionBtns}>
          <Button
            onClick={() => editHospital(hospital._id)}
            style={{ width: "100%" }}
          >
            View &nbsp; <EditOutlinedIcon />
          </Button>
          <Button
            onClick={() => editHospital(hospital._id)}
            style={{ width: "100%" }}
          >
            Edit &nbsp; <EditOutlinedIcon />
          </Button>
          <Button
            onClick={() => removeHospital(hospital._id)}
            style={{ width: "100%" }}
          >
            Delete &nbsp; <DeleteOutlineOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Hospital;
