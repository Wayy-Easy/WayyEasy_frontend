import React, { useState, useEffect } from "react";
// import { io } from "socket.io-client";
import { Button, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Drawer from "@mui/material/Drawer";
import { useHistory, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  root: {
    display: "flex",
    flexDirection: "column",
  },
  mainContainer: {
    marginTop: "30px",
    position: "relative",
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    position: "relative",
    marginTop: "20px",
    width: drawerWidth,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
  active: {
    background: "#f4f4f4",
  },
});

const Admin = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = JSON.parse(localStorage.getItem("owner"));
  const [socket, setSocket] = useState(null);

  // console.log("data", user?._id);

  // useEffect(() => {
  //   setSocket(io("http://localhost:2002"));
  // }, []);

  // useEffect(() => {
  //   socket?.on("bookRequestToHospital", (data) => {
  //     console.log(data);
  //   });
  // }, [socket]);

  const menuItems = [
    {
      text: "Dashboard",
      icon: <SubjectOutlined color="secondary" />,
      path: "/admin/opd/",
    },
    {
      text: "Services",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/admin/opd/services/",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          anchor="left"
        >
          <div>
            <Typography variant="h5" className={classes.title}>
              Admin Panel
            </Typography>
          </div>

          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => history.push(item.path)}
                className={
                  location.pathname == item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div className={classes.page}>{children}</div>
      </div>
    </div>
  );
};

export default Admin;
