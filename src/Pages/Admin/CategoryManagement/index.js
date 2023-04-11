import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { getAllGenres } from "../../../ApiServices/genresApi";
import BannerTilte from "../../../Layouts/AdminLayout/components/BannerTitle";
import CategoryDataGrid from "./CategoryDataGrid";
import { getAllUsers } from "../../../ApiServices/userApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import DraggableDialog from "./CategoryDataGrid/CreateAndEditCategoryModal";

function CategoryManagement() {
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const [dataGenres, setDataGenres] = useState("");
  const [dataAllUsers, setDataAllUsers] = useState([]);
  useEffect(() => {
    fetchDataGenre();
    fetchDataAllUsers();
  }, []);

  const fetchDataGenre = async () => {
    const result = await getAllGenres();

    setDataGenres(result);
  };

  const fetchDataAllUsers = async () => {
    if (!currentUser) {
      toast.error("chưa đăng nhâp");
      return;
    } else {
      if (!currentUser.isadmin) {
        toast.error("not authenzation");
      } else {
        const res = await getAllUsers(currentUser.accessToken);
        setDataAllUsers(res);
      }
    }
  };

  //dialog create or edit category
  //việc set state ở đây khiến cả component bị rerender liên tục
  const [openCategoryDialog, setOpenCategoryDialog] = useState(false);

  const handleClickOpenCategoryDialog = () => {
    setOpenCategoryDialog(true);
  };

  const handleCloseCategoryDialog = () => {
    setOpenCategoryDialog(false);
  };

  return (
    <Grid container>
      <BannerTilte
        titlePage={"Category Management Page"}
        btnCreate
        onClick={handleClickOpenCategoryDialog}
      />
      <CategoryDataGrid
        rows={dataGenres}
        allUsers={dataAllUsers}
        currentUser={currentUser}
      />

      <DraggableDialog
        open={openCategoryDialog}
        handleClose={handleCloseCategoryDialog}
        dataGenre={dataGenres}
        dataUserCurrent={currentUser}
        setDataGenres={setDataGenres}
      />
    </Grid>
  );
}

export default CategoryManagement;
