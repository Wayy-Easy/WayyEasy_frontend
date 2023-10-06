import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    "@media (min-width: 780px)": {
      display: "block",
    },
  },
  brandLogo: {
    width: "20ch",
  },
  inputRoot: {
    color: "inherit",
  },
  cards: {
    position: "relative",
    alignItems: "center",
    textAlign: "center",
  },
  inputInput: {
    width: "100%",
    "@media (min-width: 780px)": {
      width: "20ch",
    },
  },
  sectionDesktop: {
    position: "absolute",
    right: "5vw",
    display: "none",
    "@media (min-width: 780px)": {
      display: "flex",
    },
    "& a": {
      textDecoration: "none",
      marginRight: "30px",
      marginTop: "12px",
      fontSize: "18px",
      color: "black",
    },
  },
  sectionMobile: {
    position: "absolute",
    right: 0,
    "@media (min-width: 780px)": {
      display: "none",
    },
  },
  btnStyle: {
    textTransform: "capitalize",
    margin: 3,
    width: "220px",
  },
  dialogBody: {
    padding: 15,
  },
}));

export default useStyles;
