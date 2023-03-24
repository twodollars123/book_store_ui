import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../../store/apiRequest";
import logo from "../../../assets/images/logo.png";
import catAvartar from "../../../assets/images/cat.jpg";
import "./Header.scss";
import Menu from "../../../Components/Menu";
import Navi from "../Navi";
import Wrapper from "../../../Components/Menu/Wrapper";
import MenuItem from "../../../Components/Menu/MenuItem/MenuItem";
import Button from "../../../Components/Button";

function Header() {
  const data = [];
  const cartItem =
    data && data.length > 0 ? data : [{ name: "Chưa có sản phẩm nào" }];

  //test
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const renderMenuUser = () => {
    return (
      <Wrapper>
        <MenuItem label="Log out" onClick={handleLogout} />
      </Wrapper>
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
          {/* {currentUser ? (
            currentUser.isadmin ? (
              <Menu>
                <span className="avartar__user">
                  <img src={catAvartar} alt="avatar" />
                </span>
              </Menu>
            ) : (
              <Menu renderResult={renderMenuUser}>
                <span className="avartar__user">
                  <img src={catAvartar} alt="avatar" />
                </span>
              </Menu>
            )
          ) : (
            <Menu>
              <i className="fa fa-user-o icon" />
            </Menu>
          )} */}
          {/* <Menu> */}
          {/* <Link to="/giohang" className="cart__toggle"> */}
          <Button
            to="/cart"
            leftIcon={<i className="fa fa-shopping-bag " />}
            badge
            countBadge={10}
          ></Button>
          {/* </Link> */}
          {/* </Menu> */}
        </div>
      </Container>
    </div>
  );
}

export default Header;
