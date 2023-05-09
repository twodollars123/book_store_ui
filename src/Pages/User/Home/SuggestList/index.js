import classNames from "classnames/bind";

import CardBook from "../../../../Components/CardBook";
import { handleLinkGGDrive } from "../../../../Ultilities";
import style from "./SuggestList.module.scss";
import { updateUser } from "../../../../ApiServices/userApi";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "../../../../store/cartSlice";
import { addCart } from "../../../../store/apiRequest";

const cx = classNames.bind(style);

function SuggestList({ dataBooks, dataAuthors, currentUser }) {
  const dispatch = useDispatch();
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
          const handleAddCart = async (e) => {
            //log
            console.log("e", e);
            console.log("item", item);
            const newItem = { itemId: item._id, quantity: 1 };
            await addCart(currentUser._id, newItem, dispatch);
            // dispatch(clearCart());
            // console.log("currentuser: ", currentUser);
            // console.log("currentuser cart: ", currentUser.cart);

            // const cart = [...currentUser.cart];
            // cart.unshift(item._id);
            // console.log("cart", cart);
            // const payload = { cart: cart };
            // const updatedCart = await updateUser(
            //   payload,
            //   currentUser.accessToken,
            //   currentUser._id
            // );
            // //log
            // console.log(updatedCart);
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
