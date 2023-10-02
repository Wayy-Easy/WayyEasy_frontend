import { CircularProgress } from "@mui/material";

import styles from "./progressbar.module.css";

const ProgressBar = () => {
  return (
    <div className={styles.mainContainer}>
      <CircularProgress className={styles.progressBar} />
    </div>
  );
};

export default ProgressBar;
