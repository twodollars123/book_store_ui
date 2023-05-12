import style from "./Cart.module.scss";

import classNames from "classnames/bind";
import { useState } from "react";
import { changeQuantity } from "../../../ApiServices/cartApi";
// import { changeQuantity } from "../../../store/apiRequest";
// import { useDispatch } from "react-redux";

const cx = classNames.bind(style);

function ChangeQuantity({
  defaultValue,
  currentUser,
  item,
  price,
  setDataCart,
}) {
  const [quantity, setQuantity] = useState(defaultValue);
  // const dispatch = useDispatch();
  return (
    <span className={cx("cartitem__quantity")}>
      <span
        className={cx("btnIncrease")}
        onClick={async () => {
          if (quantity > 0) {
            setQuantity(quantity - 1);

            const payload = {
              id: item._id,
              quantity: quantity - 1,
              // totalPrice: item.totalPrice - price,
            };
            const newdata = await changeQuantity(currentUser._id, payload);
            setDataCart(newdata.items);
          }
        }}
      >
        -
      </span>
      <span className={cx("input__quantity")}>{quantity}</span>
      <span
        className={cx("btnDecrease")}
        onClick={async () => {
          setQuantity(quantity + 1);

          const payload = {
            id: item._id,
            quantity: quantity + 1,
          };
          const newdata = await changeQuantity(currentUser._id, payload);
          setDataCart(newdata.items);
        }}
      >
        +
      </span>
    </span>
  );
}

export default ChangeQuantity;
