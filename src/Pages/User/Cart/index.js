import classNames from "classnames/bind";

import style from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { getAllBooks } from "../../../ApiServices/booksApi";
import { useEffect, useState } from "react";
import { formatCurrent, handleLinkGGDrive } from "../../../Ultilities";
import Image from "../../../Components/Image";
import Button from "../../../Components/Button";
import ChangeQuantity from "./ChangeQuantity";

const cx = classNames.bind(style);

function Cart() {
  const carts = useSelector((state) => state.cart.items);
  const currentUser = useSelector((state) => state.auth.login?.currentUser);

  const [dataAllBook, setDataAllBook] = useState([]);

  const fetchAllBook = async () => {
    const data = await getAllBooks();
    setDataAllBook(data);
  };

  useEffect(() => {
    fetchAllBook();
  }, []);

  return (
    <div className={cx("container")}>
      <span>
        <h2>Giỏ hàng</h2>
      </span>

      <div className={cx("header")}>
        <div className="checkbox-wrapper-46">
          <input className="inp-cbx" id="cbx-46" type="checkbox" />
        </div>
        <span style={{ display: "block", width: "100px" }}>
          <p></p>
        </span>
        <span className={cx("cartitem__name")}>
          <p>Sản phẩm</p>
        </span>

        <span className={cx("cartitem__price")}>
          <p>Đơn giá</p>
        </span>
        <span className={cx("cartitem__quantity")}>
          <p>Số lượng</p>
        </span>
        <span className={cx("cartitem__total")}>
          <p>Thành tiền</p>
        </span>
      </div>
      {carts &&
        carts.length > 0 &&
        carts[carts.length - 1].map((item) => {
          const book = dataAllBook.find((book) => book._id === item.itemId);
          return (
            <div className={cx("rowItem")} key={item._id}>
              <div className="checkbox-wrapper-46">
                <input className="inp-cbx" id="cbx-46" type="checkbox" />
              </div>
              {book && (
                <Image
                  src={handleLinkGGDrive(book.thumnel)}
                  alt={book.name}
                  className={cx("cartitem__thumnel")}
                />
              )}
              <span className={cx("cartitem__name")}>
                <p>{book?.name || ""}</p>
              </span>
              <span className={cx("cartitem__price")}>
                <p>{formatCurrent(book?.price)}</p>
              </span>
              <ChangeQuantity
                defaultValue={item.quantity}
                item={item}
                currentUser={currentUser}
              />
              <span className={cx("cartitem__total")}>
                <p>{formatCurrent(book?.price * item?.quantity)}</p>
              </span>
            </div>
          );
        })}

      <div className={cx("payment", "rowItem")}>
        <span>
          <p>Tổng thanh toán: </p>
        </span>
        <Button>Thanh toán</Button>
      </div>
    </div>
  );
}

export default Cart;
