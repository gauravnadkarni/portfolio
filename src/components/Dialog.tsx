import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export type DialogProps = {
  title: string;
  content: Array<string>;
  handleClose: () => void;
  actions: Array<{
    title: string;
    onClick: () => void;
  }>;
  isOpen: boolean;
};

const generateButtons = (actions: DialogProps["actions"]) => {
  return actions.map(({ onClick, title }) => (
    <Button onClick={onClick} autoFocus>
      {title}
    </Button>
  ));
};

const DialogBox: React.FC<DialogProps> = ({
  title,
  content,
  handleClose,
  actions,
  isOpen,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>
            {content && content.map((segment)=>(<Typography gutterBottom>
                {segment}
          </Typography>))}
        </DialogContent>
        {actions && <DialogActions>{generateButtons(actions)}</DialogActions>}
      </Dialog>
    </React.Fragment>
  );
};

export default DialogBox;
