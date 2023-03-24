import { Link } from "react-router-dom";

function MenuItem(link, label, to, onClick) {
  return (
    <div className="menuitem__container">
      {link ? (
        <Link to={to}>{label}</Link>
      ) : (
        <button onClick={onClick}>{label}</button>
      )}
    </div>
  );
}

export default MenuItem;
