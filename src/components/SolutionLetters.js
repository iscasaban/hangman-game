import '../styles/components/Letters.scss';

const SolutionLetters = (props) => {
  const renderSolutionLetters = (word) => {
    const arrayWords = word.split('');
    const renderArray = arrayWords.map((letter, index) => {
      if (props.userLetters.includes(letter)) {
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
      <ul className="letters">{renderSolutionLetters(props.word)}</ul>
    </div>
  );
};

export default SolutionLetters;
