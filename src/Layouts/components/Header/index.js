import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../../store/apiRequest";
import logo from "../../../assets/images/logo.png";
import catAvartar from "../../../assets/images/cat.jpg";
import "./Header.scss";

import Navi from "../Navi";
import Button from "../../../Components/Button";
import Menu from "../../../Components/Popper/Menu";

function Header() {
  const data = [];
  const cartItem =
    data && data.length > 0 ? data : [{ label: "Chưa có sản phẩm nào" }];

  //test
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //data menu user
  const DATA_MENU_ITEMS_USER = [
    {
      label: "My Profile",
      to: "/getme",
    },
    {
      label: "Log out",
    },
  ];

  // data menu user khi chưa đăng nhâp
  const DATA_MENU_ITEMS_USER_NOT_LOGGED_IN = [
    { label: "Log in", to: "/loggin" },
    {
      label: "Sign up",
      to: "/signup",
    },
  ];

  //handle logout
  const handleLogout = async () => {
    await logoutUser(
      currentUser.accessToken,
      dispatch,
      navigate,
      currentUser._id
    );
    localStorage.clear();
    window.location.href = "/loggin";
  };

  // hàm render header action sau khi đăng nhâp thành công
  const renderHeaderActionSignedUp = () => {
    //biến đk xác định có là admin hay k
    const isAdmin = !!currentUser.isadmin;
    console.log("is admin", isAdmin);
    return isAdmin ? (
      <Menu items={DATA_MENU_ITEMS_USER}>
        <span className="avartar__user">
          <img src={catAvartar} alt="avatar" />
        </span>
      </Menu>
    ) : (
      <Menu items={DATA_MENU_ITEMS_USER}>
        <span className="avartar__user">
          <img src={catAvartar} alt="avatar" />
        </span>
      </Menu>
    );
  };

  return (
    <div className="header__container">
      <Container fluid="md" className="header__inner">
        <Link to="/" className="logo--link">
          <img src={logo} alt="logo" />
        </Link>

        <Navi />

        <div className="header__action">
          {currentUser ? (
            renderHeaderActionSignedUp()
          ) : (
            <Menu items={DATA_MENU_ITEMS_USER_NOT_LOGGED_IN}>
              <div>
                <Button to="/cart" leftIcon={<i className="fa fa-user-o " />} />
              </div>
            </Menu>
          )}

          <Menu items={cartItem}>
            <span>
              <Button
                to="/cart"
                leftIcon={<i className="fa fa-shopping-bag " />}
                badge
                countBadge={10}
              ></Button>
            </span>
          </Menu>
        </div>
      </Container>
    </div>
  );
}

export default Header;
