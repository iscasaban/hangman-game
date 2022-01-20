import '../styles/components/Letters.scss';

const ErrorLetters = (props) => {
  const renderErrorLetters = () => {
    const errorLetters = props.userLetters
      .filter((letter, index) => !props.word.includes(letter))
      .map((letter, index) => {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      });
      
      props.counterNumbOfErrors(errorLetters);
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
