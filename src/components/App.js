import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';

function App() {
  //Solución
  const [word, setWord] = useState('esternocleidomastoideo');

  //Letras del usuario

  const [userLetters, setUserLetters] = useState([]);

  //Número de errores
  let numberOfErrors = 0;

  //Valor escrito por el usuario
  const [lastLetter, setLastLetter] = useState('');


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
            <SolutionLetters word={word} userLetters={userLetters} />
            <ErrorLetters word={word} userLetters={userLetters} />
           
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
          <Dummy numberOfErrors={numberOfErrors} />
        </main>
      </div>
    </div>
  );
}

export default App;
