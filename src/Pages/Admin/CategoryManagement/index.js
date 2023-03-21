import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { getAllGenres } from "../../../ApiServices/genresApi";
import BannerTilte from "../../../Layouts/AdminLayout/components/BannerTitle";
import CategoryDataGrid from "./CategoryDataGrid";

function CategoryManagement() {
  const [dataGenres, setDataGenres] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getAllGenres();

    setDataGenres(result);
  };

  return (
    <Grid container>
      <BannerTilte titlePage={"Category Management Page"} btnCreate />
      <CategoryDataGrid rows={dataGenres} />
    </Grid>
  );
}

export default CategoryManagement;
