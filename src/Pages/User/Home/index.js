import { Container } from "reactstrap";

import Banner from "./Banner";
import "./Home.scss";
import { handleLinkGGDrive } from "../../../Ultilities";
import SuggestList from "./SuggestList";
import { useEffect, useState } from "react";
import { getAllBooks, getBooksPerPage } from "../../../ApiServices/booksApi";
import { getAllAuthor } from "../../../ApiServices/authorApi";
import Image from "../../../Components/Image";
import { useSelector } from "react-redux";

function Home() {
  const [dataBooks, setDataBooks] = useState();
  const [dataAuthors, setDataAuthors] = useState();

  const currentUser = useSelector((state) => state.auth.login?.currentUser);

  useEffect(() => {
    // fetchDataBooksPerPage();
    fetchDataAllBooks();
    fetchDataAllAuthors();
  }, []);

  const fetchDataBooksPerPage = async () => {
    const result = await getBooksPerPage();
    setDataBooks(result.data);
  };

  const fetchDataAllBooks = async () => {
    const result = await getAllBooks();
    setDataBooks(result);
  };

  const fetchDataAllAuthors = async () => {
    const result = await getAllAuthor();
    setDataAuthors(result);
  };
  return (
    <Container fluid="md">
      <Banner />
      <div className="home__main">
        <SuggestList
          dataBooks={dataBooks}
          dataAuthors={dataAuthors}
          currentUser={currentUser}
        />
      </div>
    </Container>
  );
}

export default Home;
