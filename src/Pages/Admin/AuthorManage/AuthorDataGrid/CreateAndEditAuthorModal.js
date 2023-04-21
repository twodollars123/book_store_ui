import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

import "./AuthorDataGrid.scss";
import MultiSelect from "../../../../Components/MultiSelect";
import { toast } from "react-toastify";
import { creareAGenre, updateAGenre } from "../../../../ApiServices/genresApi";
import { createAAuthor } from "../../../../ApiServices/authorApi";

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

export default function DraggableDialog({
  open,
  handleClose,
  update = false,
  dataAuthors,
  dataUserCurrent,
  setDataAuthors,
  dataAuthorUpdate,
}) {
  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [hometown, setHometown] = React.useState("unknown");
  const [avatar, setAvatar] = React.useState("unknown");
  const [validated, setValidated] = React.useState(false);
  const nameInputRef = React.useRef();
  const nameSpanRef = React.useRef();

  //   const handleUpdate = async () => {
  //     let payload = {
  //       updatedBy: dataUserCurrent._id,
  //       genreParentId: parentGenre,
  //     };
  //     if (nameInputValue) {
  //       payload = { ...payload, name: nameInputValue };
  //     }

  //     const result = await updateAGenre(
  //       dataGenreUpdate._id,
  //       payload,
  //       dataUserCurrent.accessToken
  //     );
  //     //tìm index trong dataGenre thay thế result vào vị trí index

  //     if (result) {
  //       const index = dataGenre.indexOf(
  //         dataGenre.find((item) => item._id === result._id)
  //       );
  //       const newDataGenres = [...dataGenre];
  //       newDataGenres.splice(index, 1, result);
  //       setDataGenres(newDataGenres);
  //     }
  //     handleClose();
  //     // }
  //   };
  const validateName = (e) => {
    const nameValue = e.target.value;
    //kiểm tra rỗng, trùng tên đã có
    if (!nameValue.trim()) {
      nameInputRef.current.className = "error--nameinput";
      nameSpanRef.current.textContent =
        "Do not leave the name of genre field blank";
    } else {
      const isExist =
        dataAuthors &&
        dataAuthors.length > 0 &&
        dataAuthors.some((item) => item.name === nameValue.trim());
      if (isExist) {
        nameSpanRef.current.textContent = "this name is exist";
      } else {
        nameInputRef.current.className = "success--nameinput";
        nameSpanRef.current.textContent = ``;
        setValidated(true);
      }
    }
  };
  const validateAge = (e) => {
    const ageValue = e.target.value;
    if (!ageValue.trim()) {
      setAge("unknown");
    }
  };
  const validateHometown = (e) => {
    const hometownValue = e.target.value;
    if (!hometownValue.trim()) {
      setHometown("unknown");
    }
  };

  const handleClickCreate = async () => {
    if (validated) {
      const payload = {
        name,
        age,
        hometown,
        avatar,
        createdBy: dataUserCurrent._id,
      };
      const newAuthor = await createAAuthor(payload);
      const newDataAuthors = [newAuthor, ...dataAuthors];
      setDataAuthors(newDataAuthors);
      handleClose();
    } else {
      toast.error(`Field "Name" does not validate!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        sx={{ minWidth: "400px" }}
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {!update ? "Create a new author" : "Update Author"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="content__create__container">
              <span className="content__create__inputgroup">
                <label className="content__create__label--name">Name: </label>
                <input
                  ref={nameInputRef}
                  placeholder="The name of new author"
                  className="content__create__input--name"
                  defaultValue={update ? dataAuthorUpdate.name : ""}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={validateName}
                />
              </span>
              <span ref={nameSpanRef} className="name__error"></span>
              <span className="content__create__inputgroup">
                <label className="content__create__label--name">Age: </label>
                <input
                  //   ref={nameInputRef}
                  type="number"
                  placeholder="The age of new author"
                  className="content__create__input--name"
                  defaultValue={update ? dataAuthorUpdate.name : ""}
                  onChange={(e) => setAge(e.target.value)}
                  onBlur={validateAge}
                />
              </span>
              <span className="content__create__inputgroup">
                <label className="content__create__label--name">
                  Hometown:
                </label>
                <input
                  //   ref={nameInputRef}
                  placeholder="The hometown of new author"
                  className="content__create__input--name"
                  defaultValue={update ? dataAuthorUpdate.name : ""}
                  onChange={(e) => setHometown(e.target.value)}
                  onBlur={validateHometown}
                />
              </span>
              <span className="content__create__inputgroup">
                <label className="content__create__label--name">Avatar: </label>
                <input
                  //   ref={nameInputRef}
                  //   placeholder="The name of new author"
                  type="file"
                  className="content__create__input--name"
                  defaultValue={update ? dataAuthorUpdate.name : ""}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </span>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClickCreate}>Create</Button>
          {/* <Button onClick={update ? handleUpdate : handleSubmit}>
            {update ? "Update" : "Create"}
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
