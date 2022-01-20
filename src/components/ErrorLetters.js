import '../styles/components/Letters.scss';

const ErrorLetters = (props) => {
  const renderErrorLetters = () => {
    const errorLetters = props.userLetters
      .filter((letter) => !props.word.includes(letter))
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

export default ErrorLetters;
