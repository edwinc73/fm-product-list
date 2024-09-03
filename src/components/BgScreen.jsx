import PropTypes from "prop-types";

export const BgScreen = ({ children, setShow }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-50 text-Rose-900 top-0 left-0 w-screen h-screen"
      onClick={() => {
        setShow(false);
      }}
    >
      {children}
    </div>
  );
};

BgScreen.propTypes = {
  setShow: PropTypes.func,
  children: PropTypes.node.isRequired,
};
