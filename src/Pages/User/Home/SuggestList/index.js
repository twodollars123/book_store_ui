import classNames from "classnames/bind";

import CardBook from "../../../../Components/CardBook";
import { handleLinkGGDrive } from "../../../../Ultilities";
import style from "./SuggestList.module.scss";

const cx = classNames.bind(style);

function SuggestList({ dataBooks, dataAuthors }) {
  return (
    <div className={cx("container")}>
      {dataBooks &&
        dataBooks.map((item) => {
          const author =
            dataAuthors &&
            dataAuthors.map((author) => {
              if (author._id === item.author) {
                return author.name;
              }
            });
          return (
            <CardBook
              key={item._id}
              src={handleLinkGGDrive(item.thumnel)}
              alt={item.name}
              price={item.price}
              title={item.name}
              author={author}
              sale="10%"
            />
          );
        })}
    </div>
  );
}

export default SuggestList;
