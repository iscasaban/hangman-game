import "../styles/components/Letters.scss";
import PropTypes from "prop-types";

const ErrorLetters = ({ userLetters, word }) => {
  const renderErrorLetters = () => {
    const errorLetters = userLetters
      .filter((letter) => !word.includes(letter))
      .map((letter, index) => {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      });
    return errorLetters;
  };
  return (
    <div className="error">
      <h2 className="title">Letras falladas:</h2>
      <ul className="letters">{renderErrorLetters()}</ul>
    </div>
  );
};

ErrorLetters.defaultProps = {
  userLetters: [],
  word: "patata",
};
ErrorLetters.propTypes = {
  userLetters: PropTypes.array,
  word: PropTypes.string,
};
export default ErrorLetters;
