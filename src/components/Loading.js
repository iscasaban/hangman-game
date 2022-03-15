import "../styles/components/Loading.scss";
import PropTypes from "prop-types";

const Loading = ({ isLoading }) => {
  if (isLoading) {
    return <span className="loading" />;
  } else {
    return null;
  }
};

Loading.defaultProps = {
  isLoading: true,
};
Loading.propTypes = {
  isLoading: PropTypes.bool,
};
export default Loading;
