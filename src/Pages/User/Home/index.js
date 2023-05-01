import { Container } from "reactstrap";

import Banner from "./Banner";
import "./Home.scss";
import { handleLinkGGDrive } from "../../../Ultilities";
import SuggestList from "./SuggestList";
import { useEffect, useState } from "react";
import { getBooksPerPage } from "../../../ApiServices/booksApi";
import { getAllAuthor } from "../../../ApiServices/authorApi";
import Image from "../../../Components/Image";

function Home() {
  const [dataBooks, setDataBooks] = useState();
  const [dataAuthors, setDataAuthors] = useState();

  useEffect(() => {
    fetchDataBooksPerPage();
    fetchDataAllAuthors();
  }, []);

  const fetchDataBooksPerPage = async () => {
    const result = await getBooksPerPage();
    setDataBooks(result.data);
  };
  const fetchDataAllAuthors = async () => {
    const result = await getAllAuthor();
    setDataAuthors(result);
  };
  return (
    <Container fluid="md">
      <Banner />
      <div className="home__main">
        <SuggestList dataBooks={dataBooks} dataAuthors={dataAuthors} />
      </div>
    </Container>
  );
}

export default Home;
