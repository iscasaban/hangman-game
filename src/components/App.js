import '../styles/App.scss';
import { useState, useEffect } from 'react';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import Instructions from './Instructions';
import Options from './Options';
import Loading from './Loading';
import getWord from '../services/getWord';

function App() {
  //Solución
  const [word, setWord] = useState('patata');
  useEffect(() => {
    getWord().then((wordFromApi) => {
      setWord(wordFromApi);
      setIsLoading(false);
    });
  }, []);

  //Letras del usuario

  const [userLetters, setUserLetters] = useState([]);

  //Valor escrito por el usuario
  const [lastLetter, setLastLetter] = useState('');

  //Loading
  const [isLoading, setIsLoading] = useState(true);

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

  //Contamos el número de errores

  const counterNumbOfErrors = () => {
    const errorLetters = userLetters.filter((letter) => !word.includes(letter));
    return errorLetters.length;
  };

  return (
    <div>
      <div className="page">
        <Header />
        <main className="main">
          <Loading isLoading={isLoading} />
          <Switch>
            <Route exact path="/">
              <section>
                <SolutionLetters word={word} userLetters={userLetters} />
                <ErrorLetters word={word} userLetters={userLetters} />
                <Form handleInput={handleInput} lastLetter={lastLetter} />
              </section>
            </Route>

            <Route exact path="/instructions">
              <Instructions />
            </Route>
            <Route exact path="/options">
              <Options />
            </Route>
          </Switch>
          <Dummy numberOfErrors={counterNumbOfErrors()} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
