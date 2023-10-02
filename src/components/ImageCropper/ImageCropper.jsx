import React from "react";
import Cropper from "react-easy-crop";
import { makeStyles, withStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import style from "./ImageCropper.module.css";
import { getCroppedImage } from "./Cropper";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const CustomDialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const CustomDialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(DialogContent);

const CustomDialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(DialogActions);

const ImageCropper = ({ setImage, image }) => {
  const [data, setData] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddImage = () => {
    getCroppedImage(data, croppedArea, setImage, image);
    setOpen(false);
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setData(reader.result);
      });
    }
  };

  return (
    <div className={style.container}>
      <Button
        className={style.addImageBtn}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Add Image
      </Button>
      <Dialog aria-labelledby="customized-dialog-title" open={open}>
        <CustomDialogTitle
          id="customized-dialog-title"
          onClose={(e) => setOpen(false)}
        >
          Select Image
        </CustomDialogTitle>
        <CustomDialogContent dividers style={{ height: "50vh", width: "100%" }}>
          <div className={style.containerButtons}>
            <input type="file" accept="image/*" onChange={onSelectFile} />
          </div>
          <div className={style.containerCropper}>
            {data ? (
              <>
                <div className={style.cropper}>
                  <Cropper
                    image={data}
                    crop={crop}
                    zoom={zoom}
                    aspect={16 / 9}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>
              </>
            ) : null}
          </div>
        </CustomDialogContent>
        <CustomDialogActions>
          <Button autoFocus onClick={handleAddImage} color="primary">
            Confirm
          </Button>
        </CustomDialogActions>
      </Dialog>
    </div>
  );
};

export default ImageCropper;
