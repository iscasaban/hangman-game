import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';

function App() {
  //Solución
  const [word, setWord] = useState('esternocleidomastoideo');

  //Letras del usuario

  const [userLetters, setUserLetters] = useState([]);

  //Número de errores
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  //Valor escrito por el usuario
  const [lastLetter, setLastLetter] = useState('');

  const handleInput = (userLetter) => {
    //Letra del usuario
    //const userLetter = event.currentTarget.value;
    setLastLetter(userLetter);
    if (
      userLetter.match('^[A-Za-zÑñ]?$') &&
      userLetter &&
      !userLetters.includes(userLetter)
    ) {
      setUserLetters([...userLetters, userLetter]);
    }
  };

  const counterNumbOfErrors = (errorLetters) => {
    setNumberOfErrors(errorLetters.length);
  };
  

  return (
    <div>
      <div className="page">
        <Header />
        <main className="main">
          <section>
            <SolutionLetters word={word} userLetters={userLetters} />
            <ErrorLetters word={word} userLetters={userLetters} counterNumbOfErrors={counterNumbOfErrors} />
           <Form handleInput={handleInput} lastLetter={lastLetter} />
          </section>
          <Dummy numberOfErrors={numberOfErrors} />
        </main>
      </div>
    </div>
  );
}

export default App;
