import style from "./Cart.module.scss";

import classNames from "classnames/bind";
import { useState } from "react";
import { changeQuantity } from "../../../store/apiRequest";
import { useDispatch } from "react-redux";

const cx = classNames.bind(style);

function ChangeQuantity({ defaultValue, currentUser, item }) {
  const [quantity, setQuantity] = useState(defaultValue);
  const dispatch = useDispatch();
  return (
    <span className={cx("cartitem__quantity")}>
      <span
        className={cx("btnIncrease")}
        onClick={() => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
          }
          const payload = { id: item._id, quantity: quantity - 1 };
          changeQuantity(currentUser._id, payload, dispatch);
        }}
      >
        -
      </span>
      <span className={cx("input__quantity")}>{quantity}</span>
      <span
        className={cx("btnDecrease")}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </span>
    </span>
  );
}

export default ChangeQuantity;
