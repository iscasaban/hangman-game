import "../styles/components/Letters.scss";
import PropTypes from "prop-types";

const SolutionLetters = ({ word, userLetters }) => {
  const renderSolutionLetters = (word) => {
    const arrayWords = word.split("");
    const renderArray = arrayWords.map((letter, index) => {
      if (userLetters.includes(letter)) {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
    return renderArray;
  };

  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters(word)}</ul>
    </div>
  );
};

SolutionLetters.defaultProps = {
  userLetters: [],
  word: "patata",
};
SolutionLetters.propTypes = {
  userLetters: PropTypes.array,
  word: PropTypes.string,
};

export default SolutionLetters;
