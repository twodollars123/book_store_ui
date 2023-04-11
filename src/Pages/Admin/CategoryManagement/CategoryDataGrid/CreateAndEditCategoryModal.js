import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

import "./CategoryDataGrid.scss";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const RenderCreateCategory = ({
  update = false,
  dataGenre,
  dataUserCurrent,
  setValidateSuccess,
}) => {
  const [nameInputValue, setNameInputValue] = React.useState("");
  const nameInputRef = React.useRef();
  const nameSpanRef = React.useRef();

  const validate = () => {
    if (!nameInputValue) {
      nameInputRef.current.className = "error--nameinput";
      nameSpanRef.current.textContent =
        "Do not leave the name of genre field blank";
    } else {
      const isExist =
        dataGenre &&
        dataGenre.length > 0 &&
        dataGenre.some((item) => item.name.includes(nameInputValue));
      if (isExist) {
        nameSpanRef.current.textContent = `${nameInputValue} is existed`;
      } else {
        nameInputRef.current.className = "success--nameinput";
        nameSpanRef.current.textContent = ``;
        setValidateSuccess(true);
      }
    }
  };

  return (
    <div className="content__create__container">
      <span className="content__create__inputgroup">
        <label className="content__create__label--name">Name: </label>
        <input
          ref={nameInputRef}
          placeholder="The name of new genre"
          className="content__create__input--name"
          defaultValue={update ? nameInputValue : ""}
          onChange={(e) => setNameInputValue(e.target.value)}
          onBlur={() => validate()}
        />
      </span>
      <span ref={nameSpanRef} className="name__error"></span>
    </div>
  );
};
const RenderUpdateCategory = () => {
  return <p>Update</p>;
};

export default function DraggableDialog({
  open,
  handleClose,
  update = false,
  dataGenre,
  dataUserCurrent,
}) {
  const [validateSuccess, setValidateSuccess] = React.useState(false);
  const handleSubmit = () => {
    if (validateSuccess) {
      handleClose();
    }
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        sx={{ minWidth: "400px" }}
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {!update ? "Create a new Genre" : "Update Genre"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {update ? (
              <RenderUpdateCategory />
            ) : (
              <RenderCreateCategory
                dataGenre={dataGenre}
                dataUserCurrent={dataUserCurrent}
                setValidateSuccess={setValidateSuccess}
              />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>{update ? "Update" : "Create"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
