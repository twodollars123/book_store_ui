import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import logo from "../../../assets/images/logo.png";
import catAvartar from "../../../assets/images/cat.jpg";
import "./Header.scss";
import Menu from "../../../Components/Menu";
import Navi from "../Navi";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const data = [];
  const cartItem =
    data && data.length > 0 ? data : [{ name: "Chưa có sản phẩm nào" }];

  //test
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  // if (currentUser) {
  //   setIsLogin(true);
  // }
  useEffect(() => {
    if (currentUser) {
      setIsLogin(true);
    }
  }, [currentUser]);

  console.log("currentUser", currentUser);

  return (
    <div className="header__container">
      <Container fluid="md" className="header__inner">
        <Link to="/" className="logo--link">
          <img src={logo} alt="logo" />
        </Link>

        <Navi />

        <div className="header__action">
          {isLogin ? (
            //   {(currentUser.isadmin) ? (<Menu dataItemMenu={[{ name: "Setting" }, { name: "Logout" }]}>
            //   <span className="avartar__user">
            //     <img src={catAvartar} alt="avatar" />
            //   </span>
            // </Menu>) : (<Menu dataItemMenu={[{ name: "Setting" }, { name: "Logout" }]}>
            //   <span className="avartar__user">
            //     <img src={catAvartar} alt="avatar" />
            //   </span>
            // </Menu>)}
            currentUser.isadmin ? (
              <Menu
                titleHeader={`Hi, ${currentUser.username}`}
                dataItemMenu={[
                  { name: "Account manage", to: "/accountmanagerment" },
                  { name: "Setting", to: "/setting" },
                  { name: "Logout", to: "/logout" },
                ]}
              >
                <span className="avartar__user">
                  <img src={catAvartar} alt="avatar" />
                </span>
              </Menu>
            ) : (
              <Menu
                titleHeader={`Hi, ${currentUser.username}`}
                dataItemMenu={[{ name: "Setting" }, { name: "Logout" }]}
              >
                <span className="avartar__user">
                  <img src={catAvartar} alt="avatar" />
                </span>
              </Menu>
            )
          ) : (
            <Menu
              dataItemMenu={[
                { name: "Loggin", to: "/loggin" },
                { name: "Sign up", to: "/signup" },
              ]}
            >
              <i className="fa fa-user-o icon" />
            </Menu>
          )}
          <Menu
            titleHeader="Giỏ hàng"
            // dataItemMenu={[{ name: "item1" }, { name: "item2" }]}
            dataItemMenu={cartItem}
          >
            <Link to="/giohang" className="cart__toggle">
              <i className="fa fa-shopping-bag icon" />
            </Link>
          </Menu>
        </div>
      </Container>
    </div>
  );
}

export default Header;
