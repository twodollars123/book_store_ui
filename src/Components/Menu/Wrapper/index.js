function Wrapper({ children }) {
  return (
    <div className="wrapper" tabIndex="-1">
      <div className="menu__popper">{children}</div>
    </div>
  );
}

export default Wrapper;
