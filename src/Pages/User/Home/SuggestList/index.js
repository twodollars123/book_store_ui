import classNames from "classnames/bind";

import CardBook from "../../../../Components/CardBook";
import { handleLinkGGDrive } from "../../../../Ultilities";
import style from "./SuggestList.module.scss";
// import { useDispatch } from "react-redux";
// import { addCart } from "../../../../store/apiRequest";
import { addToCart } from "../../../../ApiServices/cartApi";

const cx = classNames.bind(style);

function SuggestList({ dataBooks, dataAuthors, currentUser }) {
  // const dispatch = useDispatch();
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
          const handleAddCart = async () => {
            const payload = {
              itemId: item._id,
              quantity: 1,
              totalPrice: item.price,
            };
            const result = await addToCart(currentUser._id, payload);
          };
          return (
            <CardBook
              key={item._id}
              src={item?.thumnel ? handleLinkGGDrive(item.thumnel) : ""}
              alt={item.name}
              price={item.price}
              title={item.name}
              author={author || ""}
              sale="10%"
              handleAddCart={handleAddCart}
            />
          );
        })}
    </div>
  );
}

export default SuggestList;
