import classNames from "classnames/bind";

import style from "./CardBook.module.scss";
import Image from "../Image";
import { formatCurrent } from "../../Ultilities";

const cx = classNames.bind(style);

function CardBook({ src, alt, author, title, price, sale }) {
  return (
    <div className={cx("container")}>
      {sale && <span className={cx("sale")}>{sale}</span>}
      <div className={cx("image")}>
        <Image src={src} alt={alt} className={cx("cb__img")} />
      </div>
      <div className={cx("information")}>
        <p className={cx("author")}>{author}</p>
        <p className={cx("title")}>{title}</p>
        <span className={cx("price")}>
          <p className={cx("primary__cost")}>{formatCurrent(price)}</p>
          <p className={cx("pre__sale__cost")}>{formatCurrent(price)}</p>
        </span>
        <span className={cx("action")}>
          <buton className={cx("btn__addcart")}>
            <i className="fa fa-cart-plus" />
            Thêm vào giỏ hàng
          </buton>
          <button className={cx("btn__compare")}>
            So sánh sản phẩm tương tự
          </button>
        </span>
      </div>
    </div>
  );
}

export default CardBook;
