import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';

function App() {
  //Solución
  const [word, setWord] = useState('esternocleidomastoideo');

  //Letras del usuario

  const [userLetters, setUserLetters] = useState([]);

  //Número de errores
  let numberOfErrors = 0;

  //Valor escrito por el usuario
  const [lastLetter, setLastLetter] = useState('');

  const renderSolutionLetters = (word) => {
    const arrayWords = word.split('');
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
  const renderErrorLetters = () => {
    const errorLetters = userLetters
      .filter((letter, index) => !word.includes(letter))
      .map((letter, index) => {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      });
    numberOfErrors = errorLetters.length;
    return errorLetters;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInput = (event) => {
    //Letra del usuario
    const userLetter = event.currentTarget.value;
    setLastLetter(userLetter);
    if (
      userLetter.match('^[A-Za-zÑñ]?$') &&
      userLetter &&
      !userLetters.includes(userLetter)
    ) {
      setUserLetters([...userLetters, userLetter]);
    }
  };

  return (
    <div>
      <div className="page">
        <Header /> 
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">{renderSolutionLetters(word)}</ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">{renderErrorLetters()}</ul>
            </div>
            <form onSubmit={handleSubmit} className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                onChange={handleInput}
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                value={lastLetter}
                name="last-letter"
                id="last-letter"
              />
            </form>
          </section>
          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
