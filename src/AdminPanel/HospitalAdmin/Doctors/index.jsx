import { useState, useEffect } from "react";
import { Button, Container, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import actions
import { fetchDoctors } from "../../../redux/actions/admin/hospitalAdmin/doctors";
import useStyles from "./styles";
import Doctor from "./Doctor";

const Doctors = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.doctors);
  const doctors = store?.allDoctors?.data;

  const createDoctor = () => {
    history.push("/admin/doctors/managedoctors");
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <Container className={classes.Container} maxWidth="md">
      <div className={classes.globalBtn}>
        <Button variant="contained" color="primary" onClick={createDoctor}>
          Add
          <AddIcon />
        </Button>
      </div>
      {!store?.progress ? (
        doctors &&
        doctors?.map((doctor) => <Doctor key={doctor?._id} doctor={doctor} />)
      ) : (
        <CircularProgress style={{ marginTop: "10px" }} />
      )}
    </Container>
  );
};

export default Doctors;
